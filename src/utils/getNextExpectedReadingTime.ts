import dayjs from "dayjs";

export const getNextExpectedReadingTime = (latestReadingTime: string) => {
  const latest = dayjs(latestReadingTime);
  const interval = import.meta.env.PUBLIC_READING_INTERVAL_MINS;

  return latest.add(interval, "minutes");
};
