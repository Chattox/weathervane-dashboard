import React from "react";
import { Button, Group, Popover, SegmentedControl } from "@mantine/core";
import classes from "./DateRangePicker.module.css";
import { IconChevronDown } from "@tabler/icons-react";

export const DateRangePicker = (props: {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  dateRange: string[];
  setDateRange: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const controlSegmentDict: Record<string, string> = {
    day: "24hr",
    week: "Week",
    month: "Month",
    year: "Year",
    all: "All",
  };

  return (
    <Popover
      position="bottom-start"
      shadow="sm"
      classNames={{ dropdown: classes.dropdown }}
    >
      <Popover.Target>
        <Button
          radius="sm"
          classNames={{ root: classes.buttonRoot }}
          rightSection={<IconChevronDown size={16} />}
        >
          {controlSegmentDict[props.value]}
        </Button>
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
