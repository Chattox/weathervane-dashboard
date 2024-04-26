import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Center, Group, Loader, Stack, Text } from "@mantine/core";
import { FormattedReading } from "../../types/global";
import {
  getLatestReading,
  formatReadings,
  formatSingleTimestamp,
  getNextExpectedReadingTime,
} from "../../utils";
import { READINGS_LABELS } from "../../consts";
import { LatestReadingCard } from "../LatestReadingCard";
import { MobileLatestReadingCard } from "../MobileLatestReadingCard";
import classes from "./LatestReading.module.css";

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
  const [nextExpectedReadingTime, setNextExpectedReadingTime] = useState<Dayjs>(
    dayjs()
  );
  const [isLate, setIsLate] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getLatestReading().then((res) => {
      setLatestReading(formatReadings(res)[0]);
      setNextExpectedReadingTime(getNextExpectedReadingTime(res[0].timestamp));
      if (dayjs().isAfter(nextExpectedReadingTime)) {
        setIsLate(true);
      }
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
          <Stack gap={2}>
            <Text fw={500}>
              Latest reading:{" "}
              {latestReading
                ? formatSingleTimestamp(latestReading.timestamp)
                : "N/A"}
            </Text>
            <Group>
              <Text size="sm" fs="italic">
                Next expected reading:{" "}
                {latestReading
                  ? formatSingleTimestamp(
                      nextExpectedReadingTime?.toISOString()
                    )
                  : "N/A"}
              </Text>
              {isLate ? (
                <Text size="sm" fs="italic" className={classes.errorText}>
                  Reading is late, weather station may be offline
                </Text>
              ) : undefined}
            </Group>
          </Stack>

          {readingData}
        </Stack>
      )}
    </>
  );
};
