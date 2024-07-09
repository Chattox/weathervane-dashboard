import { Select } from "@mantine/core";
import React from "react";

export const StationSwitcher = (props: {
  station: string;
  setStation: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Select
      data={["garden-station", "office-station", "generated-test-reading"]}
      value={props.station}
      onChange={(value) => props.setStation(value as string)}
      allowDeselect={false}
    />
  );
};
