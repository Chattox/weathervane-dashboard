import { Accordion, Box, Group, Title } from "@mantine/core";
import { LatestReading } from "../LatestReading";
import { ReadingsOverview } from "../ReadingsOverview";
import { ColorSchemeSwitcher } from "../ColorSchemeSwitcher";
import classes from "./DashboardContainer.module.css";

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
      >
        <Accordion.Item
          key="latest"
          value="latest"
          classNames={{ item: classes.item }}
        >
          <Accordion.Control>Latest</Accordion.Control>
          <Accordion.Panel>
            <LatestReading />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item
          key="overview"
          value="overview"
          classNames={{ item: classes.item }}
        >
          <Accordion.Control>Overview</Accordion.Control>
          <Accordion.Panel>
            <ReadingsOverview />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
};
