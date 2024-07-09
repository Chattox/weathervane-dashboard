import { Select } from "@mantine/core";
import React from "react";

export const StationSwitcher = (props: {
  station: string;
  setStation: React.Dispatch<React.SetStateAction<string>>;
  stations: string[];
}) => {
  return (
    <Select
      data={props.stations}
      value={props.station}
      onChange={(value) => props.setStation(value as string)}
      allowDeselect={false}
    />
  );
};
