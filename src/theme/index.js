import React, { useState, useEffect } from "react";
import { useColorScheme } from "react-native-appearance";
import { lightColors, darkColors } from "./colors";

export const ThemeContext = React.createContext({
  isDark: false,
  colors: lightColors,
  setScheme: () => {},
});
export const ThemeProvider = (props) => {
  // Getting the device color theme
  const colorScheme = useColorScheme(); // Can be dark | light | no-preference
  const [isDark, setIsDark] = useState(colorScheme === "dark");
};
