import {
  Group,
  Paper,
  Stack,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import { COMPASS_DIRECTIONS, READINGS_LABELS } from "../../consts";
import classes from "./LatestReadingCard.module.css";

export const LatestReadingCard = (props: {
  measurement: string;
  reading: number;
}) => {
  const colorScheme = useComputedColorScheme("light");
  const { label, unit, color } = READINGS_LABELS[props.measurement];
  const isWindDir = props.measurement === "wind_direction";
  const readingDisplay = isWindDir
    ? COMPASS_DIRECTIONS[props.reading]
    : props.reading;

  console.log(colorScheme);

  const rootClass = colorScheme === "dark" ? classes.rootDark : "";

  return (
    <Paper
      h={150}
      miw={275}
      shadow="xs"
      p="sm"
      withBorder
      classNames={{
        root: rootClass,
      }}
    >
      <Stack h="100%" justify="flex-start" ta="center">
        <Text size="lg">{label}</Text>
        <Group justify="center">
          <Text size="cardMeasurement" fw={500} c={color}>
            {readingDisplay}
          </Text>
          {isWindDir ? undefined : (
            <Text size="cardUnit" fw={500} c={color}>
              {unit}
            </Text>
          )}
        </Group>
      </Stack>
    </Paper>
  );
};
