import React from "react";
import { Button, Group, Popover, SegmentedControl, Text } from "@mantine/core";
import classes from "./DateRangePicker.module.css";

export const DateRangePicker = (props: {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  dateRange: string[];
  setDateRange: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  return (
    <Popover
      position="bottom-start"
      shadow="sm"
      classNames={{ dropdown: classes.dropdown }}
    >
      <Popover.Target>
        <Button>{props.value}</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Group>
          <SegmentedControl
            orientation="vertical"
            value={props.value}
            onChange={props.onChange}
            data={[
              { label: "24hr", value: "day" },
              { label: "Week", value: "week" },
              { label: "Month", value: "month" },
              { label: "Year", value: "year" },
              { label: "All", value: "all" },
            ]}
            withItemsBorders={false}
            classNames={{ root: classes.root }}
          />
        </Group>
      </Popover.Dropdown>
    </Popover>
  );
};
