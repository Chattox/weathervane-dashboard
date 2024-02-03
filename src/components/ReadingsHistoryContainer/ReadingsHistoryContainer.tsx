import { useEffect, useState } from "react";
import { FormattedReading } from "../../types/global";
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

  const historyDisplays = Object.keys(READINGS_LABELS).map(
    (measurement: string) => {
      const data = getIndividualReadingHistory(readings, measurement);
      return (
        <Grid.Col span={6} key={READINGS_LABELS[measurement].label}>
          <Paper shadow="xs" p="sm" classNames={{ root: rootClass }}>
            <Stack h="100%" justify="flex-start" ta="center">
              <Text size="lg">{READINGS_LABELS[measurement].label}</Text>
              <ReadingAreaChart data={data} measurement={measurement} />
            </Stack>
          </Paper>
        </Grid.Col>
      );
    }
  );

  return <>{loading ? <p>Loading</p> : <Grid>{historyDisplays}</Grid>}</>;
};
