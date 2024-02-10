import { Group, Paper, Stack, Text } from "@mantine/core";
import { COMPASS_DIRECTIONS, READINGS_LABELS } from "../../consts";
import classes from "./LatestReadingCard.module.css";

export const LatestReadingCard = (props: {
  measurement: string;
  reading: number;
}) => {
  const { label, unit, color } = READINGS_LABELS[props.measurement];
  const isWindDir = props.measurement === "wind_direction";
  const readingDisplay = isWindDir
    ? COMPASS_DIRECTIONS[props.reading]
    : props.reading;

  return (
    <Paper
      shadow="xs"
      p="sm"
      classNames={{
        root: classes.cardRoot,
      }}
    >
      <Stack h="100%" justify="flex-start" ta="center">
        <Text className={classes.label}>{label}</Text>
        <Group justify="center">
          {props.reading !== undefined ? (
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
      </Stack>
    </Paper>
  );
};
