import React, { useEffect, useState } from "react";
import { Button, Group, Popover, SegmentedControl } from "@mantine/core";
import classes from "./DateRangePicker.module.css";
import { IconChevronDown, IconClockHour9 } from "@tabler/icons-react";
import dayjs from "dayjs";
import { DatePicker } from "@mantine/dates";

export const DateRangePicker = (props: {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  dateRange?: string[];
  setDateRange: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const initRange: [Date, Date] = props.dateRange
    ? [dayjs(props.dateRange[0]).toDate(), dayjs(props.dateRange[1]).toDate()]
    : [dayjs().subtract(1, "day").toDate(), dayjs().toDate()];
  const [range, setRange] = useState<[Date | null, Date | null]>(initRange);
  const controlSegmentDict: Record<string, string> = {
    day: "24hr",
    week: "Week",
    month: "Month",
    year: "Year",
    all: "All",
    custom: `${dayjs(range[0]).format("DD/MM/YYYY")} - ${dayjs(range[1]).format(
      "DD/MM/YYYY"
    )}`,
  };

  useEffect(
    () => (props.value !== "custom" ? setRange([null, null]) : undefined),
    [props.value]
  );

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
          leftSection={<IconClockHour9 size={16} />}
          rightSection={<IconChevronDown size={16} />}
        >
          {controlSegmentDict[props.value]}
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Group>
          <DatePicker
            type="range"
            value={range}
            onChange={(e) => {
              if (e[0] && e[1]) {
                props.setDateRange([e[0].toISOString(), e[1].toISOString()]);

                return setRange(e);
              } else {
                return setRange(e);
              }
            }}
            maxDate={new Date()}
            classNames={{ day: classes.datePickerDay }}
          />
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
            classNames={{
              root: classes.segmentRoot,
              indicator:
                props.value === "custom"
                  ? classes.disabledIndicator
                  : classes.segmentIndicator,
            }}
          />
        </Group>
      </Popover.Dropdown>
    </Popover>
  );
};
