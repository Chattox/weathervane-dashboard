import React from "react";
import { SegmentedControl } from "@mantine/core";
import classes from "./DateRangePicker.module.css";

export const DateRangePicker = (props: {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <SegmentedControl
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
  );
};
