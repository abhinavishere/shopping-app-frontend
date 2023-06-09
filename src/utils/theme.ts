import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#F9A109",
    secondary: "#888b8e0a",
    tertiary: "#454545",
    primaryLight: "#FFF0DE",
    cardBg: "#80485B",
  },
  fonts: {
    body: "Quicksand, sans-serif",
    heading: "Quicksand, sans-serif",
  },
});

export default theme;
