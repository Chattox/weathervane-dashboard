import { Accordion, Box, Title } from "@mantine/core";
import { LatestReading } from "./LatestReading";
import { ReadingsOverview } from "./ReadingsOverview";
import classes from "./DashboardContainer.module.css";

export const DashboardContainer = () => {
  return (
    <Box>
      <Title order={2} ta="left" mb="md">
        Weathervane Dashboard
      </Title>
      <Accordion multiple radius={0} classNames={{ control: classes.control }}>
        <Accordion.Item key="latest" value="latest">
          <Accordion.Control>Latest</Accordion.Control>
          <Accordion.Panel>
            <LatestReading />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item key="overview" value="overview">
          <Accordion.Control>Overview</Accordion.Control>
          <Accordion.Panel>
            <ReadingsOverview />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
};
