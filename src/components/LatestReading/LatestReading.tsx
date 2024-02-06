import { useEffect, useState } from "react";
import { FormattedReading } from "../../types/global";
import { getLatestReading, formatReadings } from "../../utils";
import { Group, Stack, Text } from "@mantine/core";
import { READINGS_LABELS } from "../../consts";
import { LatestReadingCard } from "../LatestReadingCard";

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
      <LatestReadingCard
        measurement={measurement}
        reading={latestReading?.[measurement] as number}
        key={READINGS_LABELS[measurement].label}
      />
    )
  );

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Stack>
          <Text fw={500}>Latest reading: {latestReading?.timestamp}</Text>
          <Group w="100%" gap="xs" grow>
            {readingData}
          </Group>
        </Stack>
      )}
    </>
  );
};
