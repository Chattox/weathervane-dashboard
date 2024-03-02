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
import { MobileLatestReadingCard } from "../MobileLatestReadingCard";

export const LatestReading = (props: { isMobile: boolean }) => {
  const [latestReading, setLatestReading] = useState<FormattedReading>({
    timestamp: "",
    pressure: 0,
    rain: 0,
    wind_speed: 0,
    temperature: 0,
    humidity: 0,
    wind_direction: 0,
    rain_per_second: 0,
    luminance: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getLatestReading().then((res) => {
      setLatestReading(formatReadings(res)[0]);
      setLoading(false);
    });
  }, []);

  const readingData = props.isMobile ? (
    <MobileLatestReadingCard latestReading={latestReading} />
  ) : (
    <Group w="100%" gap="xs" grow>
      {Object.keys(READINGS_LABELS).map((measurement: string) =>
        measurement !== "cumulative_rain" ? (
          <LatestReadingCard
            measurement={measurement}
            reading={latestReading?.[measurement] as number}
            key={READINGS_LABELS[measurement].label}
          />
        ) : (
          false
        )
      )}
    </Group>
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

          {readingData}
        </Stack>
      )}
    </>
  );
};
