import { Accordion, Box, Group, Title } from "@mantine/core";
import { LatestReading } from "../LatestReading";
import { ColorSchemeSwitcher } from "../ColorSchemeSwitcher";
import classes from "./DashboardContainer.module.css";
import { ReadingsHistoryContainer } from "../ReadingsHistoryContainer";

export const DashboardContainer = () => {
  return (
    <Box>
      <Group w="100%" justify="space-between">
        <Title order={2} ta="left" mb="md">
          Weathervane Dashboard
        </Title>
        <ColorSchemeSwitcher />
      </Group>
      <Accordion
        multiple
        defaultValue={["latest", "overview"]}
        chevronPosition="left"
        classNames={{ item: classes.item, label: classes.label }}
      >
        <Accordion.Item key="latest" value="latest">
          <Accordion.Control>Current conditions</Accordion.Control>
          <Accordion.Panel>
            <LatestReading />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item key="overview" value="overview">
          <Accordion.Control>History</Accordion.Control>
          <Accordion.Panel>
            <ReadingsHistoryContainer />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
};
