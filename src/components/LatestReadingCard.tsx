import { Group, Paper, Stack, Text } from "@mantine/core";
import { READINGS_LABELS } from "../consts";

export const LatestReadingCard = (props: {
  measurement: string;
  reading: number;
}) => {
  const { label, unit, color } = READINGS_LABELS[props.measurement];
  return (
    <Paper h={150} miw={250} shadow="xs" p="sm" withBorder>
      <Stack h="100%" justify="flex-start" ta="center">
        <Text size="lg">{label}</Text>
        <Group justify="center">
          <Text size="cardMeasurement" fw={500} c={color}>
            {props.reading}
          </Text>
          <Text size="cardUnit" fw={500} c={color}>
            {unit}
          </Text>
        </Group>
      </Stack>
    </Paper>
  );
};
