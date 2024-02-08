import { Table } from "@mantine/core";
import { IndividualReadingData } from "../../../types/global";
import { READINGS_LABELS } from "../../../consts";
import { round } from "../../../utils";
import classes from "./ChartMinMax.module.css";

export const ChartMinMax = (props: {
  data: IndividualReadingData[];
  measurement: string;
}) => {
  const readingsNumbers = props.data.map(
    (reading: IndividualReadingData) => reading[props.measurement] as number
  );

  const minReading = props.data.length > 0 ? Math.min(...readingsNumbers) : 0;
  const maxReading = props.data.length > 0 ? Math.max(...readingsNumbers) : 0;
  const average =
    props.data.length > 0
      ? round(
          readingsNumbers.reduce((p, c) => p + c) / readingsNumbers.length,
          2
        )
      : 0;

  const unit = READINGS_LABELS[props.measurement].unit;

  return (
    <Table
      withRowBorders={false}
      classNames={{
        table: classes.table,
        th: classes.th,
        td: classes.td,
      }}
      verticalSpacing={1}
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th>min</Table.Th>
          <Table.Th>max</Table.Th>
          <Table.Th>avg</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr key={props.measurement}>
          <Table.Td>{`${minReading}${unit}`}</Table.Td>
          <Table.Td>{`${maxReading}${unit}`}</Table.Td>
          <Table.Td>{`${average}${unit}`}</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
};
