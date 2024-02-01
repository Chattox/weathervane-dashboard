import { Group, Paper, Stack, Text } from "@mantine/core";

export const LatestReadingCard = (props: {
  label: string;
  reading: number;
  unit: string;
  secondReading?: number;
  secondUnit?: string;
}) => {
  return (
    <Paper h={150} miw={250} shadow="xs" p="sm" withBorder>
      <Stack h="100%" justify="flex-start" ta="center">
        <Text size="lg">{props.label}</Text>
        <Group justify="center">
          <Text size="cardMeasurement" fw={500}>
            {props.reading}
          </Text>
          <Text size="cardUnit" fw={500}>
            {props.unit}
          </Text>
        </Group>
      </Stack>
    </Paper>
  );
};
