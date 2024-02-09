import { useEffect, useState } from "react";
import { FormattedReading } from "../../types/global";
import {
  getLatestReading,
  formatReadings,
  formatSingleTimestamp,
} from "../../utils";
import { Center, Group, Loader, Stack, Text } from "@mantine/core";
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

  const readingData = Object.keys(READINGS_LABELS).map((measurement: string) =>
    measurement !== "cumulative_rain" ? (
      <LatestReadingCard
        measurement={measurement}
        reading={latestReading?.[measurement] as number}
        key={READINGS_LABELS[measurement].label}
      />
    ) : (
      false
    )
  );

  return (
    <>
      {loading ? (
        <Center>
          <Loader size="xl" />
        </Center>
      ) : (
        <Stack>
          <Text fw={500}>
            Latest reading:{" "}
            {latestReading
              ? formatSingleTimestamp(latestReading.timestamp)
              : "N/A"}
          </Text>
          <Group w="100%" gap="xs" grow>
            {readingData}
          </Group>
        </Stack>
      )}
    </>
  );
};
