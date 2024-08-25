import { DataPoint, LTTB } from "downsample";
import { IndividualReadingData } from "../types/global";
import { MAX_DATA_POINTS } from "../consts";

export const downsampleData = (
  data: IndividualReadingData[],
  measurement: string
): IndividualReadingData[] => {
  const tuples: DataPoint[] = data.map((reading: IndividualReadingData) => [
    Date.parse(reading.timestamp),
    reading[measurement] ? (reading[measurement] as number) : 0,
  ]);

  console.log(tuples);
  console.log(MAX_DATA_POINTS);
  const downsampledTuples = LTTB(tuples, MAX_DATA_POINTS);

  const downsampledData: IndividualReadingData[] = [];

  for (let i = 0; i < downsampledTuples.length; i++) {
    const tupleArr = downsampledTuples[i] as Array<number>;
    downsampledData.push({
      timestamp: new Date(tupleArr[0]).toISOString(),
      [measurement]: tupleArr[1],
    });
  }

  return downsampledData;
};
