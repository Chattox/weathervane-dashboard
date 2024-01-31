import { Accordion, Box, Center, Grid, Title } from "@mantine/core";
import { FormattedReading } from "../types/global";
import { READINGS_LABELS } from "../consts";
import { ReadingSparkline } from "./ReadingSparkline";
import { ReadingChart } from "./ReadingChart";
import { useState, useEffect } from "react";
import { getAllReadings } from "../utils/api";
import { formatReadings } from "../utils/formatReadings";

export const ReadingsOverview = () => {
  const [readings, setReadings] = useState<FormattedReading[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllReadings().then((res) => {
      setReadings(formatReadings(res));
      setLoading(false);
    });
  }, []);

  const data = Object.keys(READINGS_LABELS).map((measurement: string) => (
    <Grid.Col span={6}>
      <Accordion.Item
        key={measurement}
        value={READINGS_LABELS[measurement].label}
      >
        <Accordion.Control
          icon={
            <ReadingSparkline readings={readings} measurement={measurement} />
          }
        >
          {READINGS_LABELS[measurement].label}
        </Accordion.Control>
        <Accordion.Panel>
          <Center>
            <ReadingChart readings={readings} measurement={measurement} />
          </Center>
        </Accordion.Panel>
      </Accordion.Item>
    </Grid.Col>
  ));

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Box>
          <Title order={3} ta="left" pb="md">
            Overview
          </Title>
          <Accordion multiple>
            <Grid>{data}</Grid>
          </Accordion>
        </Box>
      )}
    </>
  );
};
