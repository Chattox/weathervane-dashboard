import { useEffect, useState } from "react";
import { FormattedReading, IndividualReadingData } from "../../types/global";
import { getAllReadings } from "../../utils/api";
import { formatReadings } from "../../utils/formatReadings";
import { READINGS_LABELS } from "../../consts";
import {
  Grid,
  Paper,
  Stack,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import classes from "./ReadingsHistoryContainer.module.css";
import { ReadingAreaChart } from "../charts/ReadingAreaChart";
import { getIndividualReadingHistory } from "../../utils/getIndividualReadingHistory";
import { ReadingBarChart } from "../charts/ReadingBarChart";

export const ReadingsHistoryContainer = () => {
  const [readings, setReadings] = useState<FormattedReading[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const colorScheme = useComputedColorScheme("light");
  const rootClass = colorScheme === "dark" ? classes.rootDark : "";

  useEffect(() => {
    getAllReadings().then((res) => {
      setReadings(formatReadings(res));
      setLoading(false);
    });
  }, []);

  const chartTypes: Record<string, string> = {
    pressure: "area",
    rain: "bar",
    wind_speed: "area",
    temperature: "area",
    humidity: "area",
    wind_direction: "area",
    rain_per_second: "bar",
    luminance: "area",
  };

  const getChart = (data: IndividualReadingData[], measurement: string) => {
    switch (chartTypes[measurement]) {
      case "area":
        return <ReadingAreaChart data={data} measurement={measurement} />;
      case "bar":
        return <ReadingBarChart data={data} measurement={measurement} />;
      default:
        return undefined;
    }
  };

  const historyDisplays = Object.keys(READINGS_LABELS).map(
    (measurement: string) => {
      const data = getIndividualReadingHistory(readings, measurement);
      return (
        <Grid.Col span={3} key={READINGS_LABELS[measurement].label}>
          <Paper shadow="xs" p="sm" classNames={{ root: rootClass }}>
            <Stack h="100%" justify="flex-start">
              <Text size="lg" fw={500} pl={16}>
                {READINGS_LABELS[measurement].label}
              </Text>
              {getChart(data, measurement)}
            </Stack>
          </Paper>
        </Grid.Col>
      );
    }
  );

  return <>{loading ? <p>Loading</p> : <Grid>{historyDisplays}</Grid>}</>;
};
