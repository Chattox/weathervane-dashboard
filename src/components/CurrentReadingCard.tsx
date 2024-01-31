import { Group, Paper, Stack, Text, Title } from "@mantine/core";

export const CurrentReadingCard = (props: {
  label: string;
  reading: number;
  unit: string;
  secondReading?: number;
  secondUnit?: string;
}) => {
  return (
    <Paper h={150} miw={200} shadow="xs" p="sm" withBorder>
      <Stack h="100%" justify="flex-start" ta="center">
        <Title order={3}>{props.label}</Title>
        <Group justify="center">
          <Title order={1}>{props.reading}</Title>
          <Text size="lg">{props.unit}</Text>
        </Group>
      </Stack>
    </Paper>
  );
};
