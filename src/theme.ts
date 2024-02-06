import {
  CSSVariablesResolver,
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

const wGrey: MantineColorsTuple = [
  "#f0f2f5",
  "#d1d8e0",
  "#b3becc",
  "#94a5b7",
  "#768ba3",
  "#5c7189",
  "#48586b",
  "#333f4c",
  "#131619",
  "#0e0e13",
];

type ExtendedColors = "wGreen" | "wBlue" | "wGrey" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedColors, MantineColorsTuple>;
  }
}

export const theme = createTheme({
  colors: {
    wGreen,
    wBlue,
    wGrey,
  },
  primaryColor: "wGreen",
  black: "#0e0e13",
  fontSizes: {
    cardUnit: rem(28),
    cardMeasurement: rem(46),
  },
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  dark: {
    "--mantine-color-body": theme.colors.wGrey[9],
  },
  light: {},
});
