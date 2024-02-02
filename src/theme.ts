import {
  DefaultMantineColor,
  MantineColorsTuple,
  createTheme,
  rem,
} from "@mantine/core";

const wGreen: MantineColorsTuple = [
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

const wBlue: MantineColorsTuple = [
  "#e2fdff",
  "#d3f3f9",
  "#abe4ee",
  "#80d5e4",
  "#5dc9da",
  "#46c1d5",
  "#35bdd3",
  "#21a6bc",
  "#0694a8",
  "#008194",
];

type ExtendedColors = "wGreen" | "wBlue" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedColors, MantineColorsTuple>;
  }
}

export const theme = createTheme({
  colors: {
    wGreen,
    wBlue,
  },
  primaryColor: "wGreen",
  black: "#1f262E",
  fontSizes: {
    cardUnit: rem(28),
    cardMeasurement: rem(46),
  },
});
