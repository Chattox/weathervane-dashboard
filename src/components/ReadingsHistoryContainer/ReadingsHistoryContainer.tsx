import { useEffect, useState } from "react";
import { FormattedReading, IndividualReadingData } from "../../types/global";
import {
  formatReadings,
  getIndividualReadingHistory,
  formatWindData,
  getDateRangeReadings,
} from "../../utils";
import { READINGS_LABELS } from "../../consts";
import { Center, Grid, Loader, Paper, Stack, Text } from "@mantine/core";
import classes from "./ReadingsHistoryContainer.module.css";
import { ReadingAreaChart } from "../charts/ReadingAreaChart";
import { ReadingBarChart } from "../charts/ReadingBarChart";
import { ReadingWindRadarChart } from "../charts/ReadingWindRadar";
import { DateRangePicker } from "../DateRangePicker";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

export const ReadingsHistoryContainer = (props: {
  isMobile: boolean;
  station: string;
}) => {
  dayjs.extend(utc);
  const [readings, setReadings] = useState<FormattedReading[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [startDate, setStartDate] = useState<string>(
    dayjs().startOf("day").toISOString()
  );
  const [endDate, setEndDate] = useState<string>(dayjs().toISOString());
  const [period, setPeriod] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    getDateRangeReadings(props.station, startDate, endDate).then((res) => {
      setReadings(formatReadings(res));
      if (props.station) {
        setLoading(false);
      }
    });
  }, [props.station, startDate, endDate]);

  const chartTypes: Record<string, string> = {
    pressure: "area",
    rain: "bar",
    wind_speed: "area",
    temperature: "area",
    humidity: "area",
    wind_direction: "windRose",
    rain_per_second: "bar",
    luminance: "area",
    cumulative_rain: "area",
    voltage: "area",
  };

  const getChart = (data: IndividualReadingData[], measurement: string) => {
    switch (chartTypes[measurement]) {
      case "area":
        return (
          <ReadingAreaChart
            data={data}
            measurement={measurement}
            isMobile={props.isMobile}
          />
        );
      case "bar":
        return (
          <ReadingBarChart
            data={data}
            measurement={measurement}
            isMobile={props.isMobile}
          />
        );
      case "windRose":
        return (
          <ReadingWindRadarChart
            data={formatWindData(readings)}
            isMobile={props.isMobile}
          />
        );
      default:
        return undefined;
    }
  };

  const historyDisplays = Object.keys(READINGS_LABELS).map(
    (measurement: string) => {
      const data = getIndividualReadingHistory(readings, measurement);
      return (
        <Grid.Col
          span={props.isMobile ? 12 : 4}
          key={READINGS_LABELS[measurement].label}
        >
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

  const updateDateRange = (dates: string[]) => {
    if (!dayjs(startDate).isSame(dates[0], "minutes")) {
      setStartDate(dates[0]);
      setEndDate(dates[1]);
    }
  };

  return (
    <>
      {loading ? (
        <Center>
          <Loader size="xl" />
        </Center>
      ) : (
        <Stack align="flex-start">
          <DateRangePicker
            dateRange={[startDate, endDate]}
            setDateRange={updateDateRange}
            period={period}
            setPeriod={setPeriod}
          />
          <Grid w="100%">{historyDisplays}</Grid>
        </Stack>
      )}
    </>
  );
};
