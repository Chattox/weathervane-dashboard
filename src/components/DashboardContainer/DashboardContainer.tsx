import { Box, Group, Title } from "@mantine/core";
import { LatestReading } from "../LatestReading";
import { ColorSchemeSwitcher } from "../ColorSchemeSwitcher";
import { ReadingsHistoryContainer } from "../ReadingsHistoryContainer";
import { useEffect, useState } from "react";
import { StationSwitcher } from "../StationSwitcher";

export const DashboardContainer = (props: {
  isMobile: boolean;
  stations: string[];
}) => {
  const [station, setStation] = useState<string>(props.stations[0]);

  useEffect(() => {
    setStation(props.stations[0]);
  }, [props.stations]);

  return (
    <Box>
      <Group w="100%" justify="space-between">
        <Title order={2} ta="left" mb="md">
          Weathervane Dashboard
        </Title>

        <ColorSchemeSwitcher />
      </Group>
      <Group mb="sm">
        <Title order={4} ta="left">
          Current conditions
        </Title>
        <StationSwitcher
          station={station}
          setStation={setStation}
          stations={props.stations}
        />
      </Group>
      <LatestReading isMobile={props.isMobile} station={station} />
      <Title order={4} ta="left" mt="md" mb="sm">
        History
      </Title>
      <ReadingsHistoryContainer isMobile={props.isMobile} station={station} />
    </Box>
  );
};
