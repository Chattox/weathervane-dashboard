import { Accordion, Box, Center, Grid, Title } from "@mantine/core";
import { FormattedReading } from "../types/global";
import { READINGS_LABELS } from "../consts";
import { ReadingSparkline } from "./ReadingSparkline";
import { ReadingChart } from "./ReadingChart";

export const ReadingsOverview = (props: { readings: FormattedReading[] }) => {
  const data = Object.keys(READINGS_LABELS).map((measurement: string) => (
    <Grid.Col span={6}>
      <Accordion.Item
        key={measurement}
        value={READINGS_LABELS[measurement].label}
      >
        <Accordion.Control
          icon={
            <ReadingSparkline
              readings={props.readings}
              measurement={measurement}
            />
          }
        >
          {READINGS_LABELS[measurement].label}
        </Accordion.Control>
        <Accordion.Panel>
          <Center>
            <ReadingChart readings={props.readings} measurement={measurement} />
          </Center>
        </Accordion.Panel>
      </Accordion.Item>
    </Grid.Col>
  ));

  return (
    <Box>
      <Title order={3} ta="left" pb="md">
        Overview
      </Title>
      <Accordion multiple>
        <Grid>{data}</Grid>
      </Accordion>
    </Box>
  );
};
