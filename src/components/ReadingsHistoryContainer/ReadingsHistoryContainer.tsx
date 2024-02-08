import { useEffect, useState } from "react";
import {
  FormattedReadingRanges,
  IndividualReadingData,
} from "../../types/global";
import {
  getAllReadings,
  formatReadings,
  getIndividualReadingHistory,
  formatWindData,
} from "../../utils";
import { READINGS_LABELS } from "../../consts";
import { Grid, Paper, Stack, Text } from "@mantine/core";
import classes from "./ReadingsHistoryContainer.module.css";
import { ReadingAreaChart } from "../charts/ReadingAreaChart";
import { ReadingBarChart } from "../charts/ReadingBarChart";
import { ReadingWindRadarChart } from "../charts/ReadingWindRose";
import { getReadingsInDateRange } from "../../utils/getReadingsInDateRange";
import { DateRangePicker } from "../DateRangePicker";

export const ReadingsHistoryContainer = () => {
  const [readings, setReadings] = useState<FormattedReadingRanges>({
    day: [],
    week: [],
    month: [],
    year: [],
    all: [],
    custom: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [range, setRange] = useState<string>("day");
  const [customRange, setCustomRange] = useState<string[]>([]);

  useEffect(() => {
    getAllReadings().then((res) => {
      const formattedReadings = formatReadings(res);
      const readingsRanges: FormattedReadingRanges = {
        day: getReadingsInDateRange(formattedReadings, { period: "day" }),
        week: getReadingsInDateRange(formattedReadings, { period: "week" }),
        month: getReadingsInDateRange(formattedReadings, { period: "month" }),
        year: getReadingsInDateRange(formattedReadings, { period: "year" }),
        all: formattedReadings,
        custom: [],
      };

      setReadings(readingsRanges);

      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      setLoading(true);
      setReadings({
        ...readings,
        custom: getReadingsInDateRange(readings.all, {
          start: customRange[0],
          end: customRange[1],
        }),
      });
      setLoading(false);
      setRange("custom");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customRange]);

  const chartTypes: Record<string, string> = {
    pressure: "area",
    rain: "bar",
    wind_speed: "area",
    temperature: "area",
    humidity: "area",
    wind_direction: "windRose",
    rain_per_second: "bar",
    luminance: "area",
  };

  const getChart = (data: IndividualReadingData[], measurement: string) => {
    switch (chartTypes[measurement]) {
      case "area":
        return <ReadingAreaChart data={data} measurement={measurement} />;
      case "bar":
        return <ReadingBarChart data={data} measurement={measurement} />;
      case "windRose":
        return <ReadingWindRadarChart data={formatWindData(readings[range])} />;
      default:
        return undefined;
    }
  };

  const historyDisplays = Object.keys(READINGS_LABELS).map(
    (measurement: string) => {
      const data = getIndividualReadingHistory(readings[range], measurement);
      return (
        <Grid.Col span={3} key={READINGS_LABELS[measurement].label}>
          <Paper shadow="xs" p="sm" classNames={{ root: classes.root }}>
            <Stack h="100%" justify="flex-start">
              <Text size="lg" fw={500} pl={16}>
                {READINGS_LABELS[measurement].label}
              </Text>
              {data.length > 0 ? (
                getChart(data, measurement)
              ) : (
                <Text ta="center" className={classes.errorText}>
                  No data
                </Text>
              )}
            </Stack>
          </Paper>
        </Grid.Col>
      );
    }
  );

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <Stack align="flex-start">
          <DateRangePicker
            value={range}
            onChange={setRange}
            dateRange={customRange}
            setDateRange={setCustomRange}
          />
          <Grid grow w="100%">
            {historyDisplays}
          </Grid>
        </Stack>
      )}
    </>
  );
};
