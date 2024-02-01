import { MantineColorsTuple, createTheme, rem } from "@mantine/core";

const greenPrimary: MantineColorsTuple = [
  "#ecfbea",
  "#ddf2da",
  "#bce2b7",
  "#99d192",
  "#7bc372",
  "#68ba5d",
  "#5db552",
  "#4c9f42",
  "#418e38",
  "#337b2c",
];

export const theme = createTheme({
  colors: {
    greenPrimary,
  },
  fontSizes: {
    cardUnit: rem(28),
    cardMeasurement: rem(46),
  },
});
