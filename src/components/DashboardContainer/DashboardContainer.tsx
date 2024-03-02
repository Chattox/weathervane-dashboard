import { Accordion, Box, Group, Title } from "@mantine/core";
import { LatestReading } from "../LatestReading";
import { ColorSchemeSwitcher } from "../ColorSchemeSwitcher";
import classes from "./DashboardContainer.module.css";
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
      <Accordion
        multiple
        defaultValue={["latest", "overview"]}
        chevronPosition="left"
        classNames={{
          item: classes.item,
          label: classes.label,
          content: props.isMobile ? classes.content : undefined,
        }}
      >
        <Accordion.Item key="latest" value="latest">
          <Accordion.Control>Current conditions</Accordion.Control>
          <Accordion.Panel>
            <LatestReading isMobile={props.isMobile} />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item key="overview" value="overview">
          <Accordion.Control>History</Accordion.Control>
          <Accordion.Panel>
            <ReadingsHistoryContainer isMobile={props.isMobile} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
};
