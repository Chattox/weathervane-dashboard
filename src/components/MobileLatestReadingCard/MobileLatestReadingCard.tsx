import { Divider, Group, Paper, Stack, Text } from "@mantine/core";
import { FormattedReading } from "../../types/global";
import { READINGS_LABELS } from "../../consts";
import classes from "./MobileLatestReadingCard.module.css";

export const MobileLatestReadingCard = (props: {
  latestReading: FormattedReading;
}) => {
  const readingDisplay = Object.keys(READINGS_LABELS).map(
    (measurement: string, i: number, arr: string[]) => {
      const { label, unit, color } = READINGS_LABELS[measurement];

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
                  {props.latestReading[measurement]}
                </Text>
                <Text className={classes.unit} c={color}>
                  {unit}
                </Text>
              </>
            ) : (
              <Text className={classes.errorText}>No data</Text>
            )}
          </Group>
          {i < arr.length - 2 ? <Divider /> : false}
        </Stack>
      ) : (
        false
      );
    }
  );
  return (
    <Paper shadow="xs" p="sm" w="100%" className={classes.cardRoot}>
      <Stack>{readingDisplay}</Stack>
    </Paper>
  );
};
