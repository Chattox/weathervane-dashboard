import React, { useEffect, useState } from "react";
import { Button, Group, Popover, SegmentedControl } from "@mantine/core";
import classes from "./DateRangePicker.module.css";
import { IconChevronDown, IconClockHour9 } from "@tabler/icons-react";
import dayjs from "dayjs";
import { DatePicker } from "@mantine/dates";

export const DateRangePicker = (props: {
  dateRange?: string[];
  setDateRange: (dates: string[]) => void;
  period: string;
  setPeriod: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const initRange: [Date, Date] = props.dateRange
    ? [dayjs(props.dateRange[0]).toDate(), dayjs(props.dateRange[1]).toDate()]
    : [dayjs().subtract(1, "day").toDate(), dayjs().toDate()];
  const [range, setRange] = useState<[Date | null, Date | null]>(initRange);
  const [opened, setOpened] = useState<boolean>(false);

  const controlSegmentDict: Record<string, string> = {
    day: "24hr",
    week: "Week",
    month: "Month",
    year: "Year",
    // Temporarily removing "all" option
    // all: "All",
    custom: `${dayjs(range[0]).format("DD/MM/YYYY")} - ${
      range[1] ? dayjs(range[1]).format("DD/MM/YYYY") : ""
    }`,
  };

  useEffect(() => {
    const now = dayjs();
    switch (props.period) {
      case "day":
        props.setDateRange([
          now.subtract(24, "hours").toISOString(),
          now.toISOString(),
        ]);
        break;
      case "week":
        props.setDateRange([
          now.subtract(1, "week").toISOString(),
          now.toISOString(),
        ]);
        break;
      case "month":
        props.setDateRange([
          now.subtract(1, "month").toISOString(),
          now.toISOString(),
        ]);
        break;
      case "year":
        props.setDateRange([
          now.subtract(1, "year").toISOString(),
          now.toISOString(),
        ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.period]);

  return (
    <Popover
      position="bottom-start"
      shadow="sm"
      classNames={{ dropdown: classes.dropdown }}
      opened={opened}
      onChange={setOpened}
    >
      <Popover.Target>
        <Button
          radius="sm"
          classNames={{ root: classes.buttonRoot }}
          leftSection={<IconClockHour9 size={16} />}
          rightSection={<IconChevronDown size={16} />}
          onClick={() => setOpened((o) => !o)}
        >
          {controlSegmentDict[props.period]}
        </Button>
      </Popover.Target>
      <Popover.Dropdown p="xs">
        <Group>
          <DatePicker
            type="range"
            value={range}
            onChange={(e) => {
              if (e[0] && e[1]) {
                if (dayjs(e[0]).isSame(dayjs(e[1]))) {
                  props.setDateRange([
                    dayjs(e[0]).startOf("day").toISOString(),
                    dayjs(e[1]).endOf("day").toISOString(),
                  ]);
                } else {
                  props.setDateRange([e[0].toISOString(), e[1].toISOString()]);
                }

                setRange(e);
                props.setPeriod("custom");
                setOpened(false);
              } else {
                setRange([e[0], null]);
                props.setPeriod("custom");
              }
            }}
            maxDate={new Date()}
            allowSingleDateInRange
            classNames={{ day: classes.datePickerDay }}
          />
          <SegmentedControl
            orientation="vertical"
            value={props.period}
            onChange={(e) => {
              props.setPeriod(e);
              setOpened(false);
            }}
            data={[
              { label: "24hr", value: "day" },
              { label: "Week", value: "week" },
              { label: "Month", value: "month" },
              { label: "Year", value: "year" },
              // Temporarily disabling "all" option
              // { label: "All", value: "all" },
            ]}
            withItemsBorders={false}
            classNames={{
              root: classes.segmentRoot,
              indicator:
                props.period === "custom"
                  ? classes.disabledIndicator
                  : classes.segmentIndicator,
            }}
          />
        </Group>
      </Popover.Dropdown>
    </Popover>
  );
};
