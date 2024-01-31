import { useEffect, useState } from "react";
import { FormattedReading } from "../types/global";
import { getLatestReading } from "../utils/api";
import { formatReadings } from "../utils/formatReadings";
import { Group } from "@mantine/core";
import { READINGS_LABELS } from "../consts";
import { CurrentReadingCard } from "./CurrentReadingCard";

export const LatestReading = () => {
  const [latestReading, setLatestReading] = useState<FormattedReading>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getLatestReading().then((res) => {
      setLatestReading(formatReadings(res)[0]);
      setLoading(false);
    });
  }, []);

  const readingData = Object.keys(READINGS_LABELS).map(
    (measurement: string) => (
      <CurrentReadingCard
        label={READINGS_LABELS[measurement].label}
        reading={latestReading?.[measurement] as number}
        unit={READINGS_LABELS[measurement].unit}
      />
    )
  );

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Group w="100%" gap="xs" grow>
          {readingData}
        </Group>
      )}
    </>
  );
};
