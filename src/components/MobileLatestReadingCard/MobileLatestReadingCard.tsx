import { Divider, Group, Paper, Stack, Text } from "@mantine/core";
import { FormattedReading } from "../../types/global";
import { COMPASS_DIRECTIONS, READINGS_LABELS } from "../../consts";
import classes from "./MobileLatestReadingCard.module.css";

export const MobileLatestReadingCard = (props: {
  latestReading: FormattedReading;
}) => {
  const readingDisplay = Object.keys(READINGS_LABELS).map(
    (measurement: string, i: number, arr: string[]) => {
      const { label, unit, color } = READINGS_LABELS[measurement];
      const isWindDir = measurement === "wind_direction";
      const readingDisplay = isWindDir
        ? COMPASS_DIRECTIONS[props.latestReading[measurement]]
        : props.latestReading[measurement];

      return measurement !== "cumulative_rain" ? (
        <Stack
          h="100%"
          justify="flex-start"
          ta="left"
          gap={0}
          key={measurement}
        >
          <Text className={classes.label}>{label}</Text>
          <Group justify="left">
            {props.latestReading !== undefined ? (
              <>
                <Text className={classes.measurement} c={color}>
                  {readingDisplay}
                </Text>
                {isWindDir ? undefined : (
                  <Text className={classes.unit} c={color}>
                    {unit}
                  </Text>
                )}
              </>
            ) : (
              <Text className={classes.errorText}>No data</Text>
            )}
          </Group>
          {i < arr.length - 2 ? <Divider my="xs" /> : false}
        </Stack>
      ) : (
        false
      );
    }
  );
  return (
    <Paper shadow="xs" p="sm" w="100%" className={classes.cardRoot}>
      <Stack gap={0}>{readingDisplay}</Stack>
    </Paper>
  );
};
