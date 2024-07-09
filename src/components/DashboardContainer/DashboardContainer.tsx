import { Box, Group, Title } from "@mantine/core";
import { LatestReading } from "../LatestReading";
import { ColorSchemeSwitcher } from "../ColorSchemeSwitcher";
import { ReadingsHistoryContainer } from "../ReadingsHistoryContainer";

export const DashboardContainer = (props: { isMobile: boolean }) => {
  return (
    <Box>
      <Group w="100%" justify="space-between">
        <Title order={2} ta="left" mb="md">
          Weathervane Dashboard
        </Title>
        <ColorSchemeSwitcher />
      </Group>
      <Title order={4} ta="left" my="sm">
        Current conditions
      </Title>

      <LatestReading isMobile={props.isMobile} />
      <Title order={4} ta="left" mt="md" mb="sm">
        History
      </Title>

      <ReadingsHistoryContainer isMobile={props.isMobile} />
    </Box>
  );
};
