import { useEffect, useState } from "react";
import { FormattedReading } from "../types/global";
import { getLatestReading } from "../utils/api";
import { formatReadings } from "../utils/formatReadings";
import { Grid, Title } from "@mantine/core";
import { READINGS_LABELS } from "../consts";

export const LatestReading = () => {
  const [latestReading, setLatestReading] = useState<FormattedReading>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getLatestReading().then((res) => {
      console.log(res);
      setLatestReading(formatReadings(res)[0]);
      setLoading(false);
    });
  }, []);

  const readingData = Object.keys(READINGS_LABELS).map(
    (measurement: string) => (
      <Grid.Col span={6}>
        <Title order={5}>{READINGS_LABELS[measurement].label}</Title>
        <p>
          {latestReading?.[measurement]}
          {READINGS_LABELS[measurement].unit}
        </p>
      </Grid.Col>
    )
  );

  return <>{loading ? <p>Loading...</p> : <Grid>{readingData}</Grid>}</>;
};
