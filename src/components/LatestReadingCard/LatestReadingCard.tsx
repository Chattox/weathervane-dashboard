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
      h={150}
      miw={275}
      shadow="xs"
      p="sm"
      classNames={{
        root: classes.root,
      }}
    >
      <Stack h="100%" justify="flex-start" ta="center">
        <Text size="lg">{label}</Text>
        <Group justify="center">
          {props.reading !== undefined ? (
            <>
              <Text size="cardMeasurement" fw={500} c={color}>
                {readingDisplay}
              </Text>
              {isWindDir ? undefined : (
                <Text size="cardUnit" fw={500} c={color}>
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
