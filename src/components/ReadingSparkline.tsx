import { Sparkline } from "@mantine/charts";
import { FormattedReading } from "../types/global";
import { formatSparkline } from "../utils/formatSparkline";
import { READINGS_LABELS } from "../consts";

export const ReadingSparkline = (props: {
  readings: FormattedReading[];
  measurement: string;
}) => {
  const sparklineData = formatSparkline(props.readings, props.measurement);

  return (
    <Sparkline
      w={100}
      h={30}
      data={sparklineData}
      curveType="linear"
      color={READINGS_LABELS[props.measurement].color}
      fillOpacity={0.6}
      strokeWidth={2}
    />
  );
};
