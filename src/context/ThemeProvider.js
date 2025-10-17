import { createContext } from "react";
import { useColorScheme } from "react-native";
import { darkMode, lightMode } from "../theme/Colours";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const theme = useColorScheme();
    const color = theme === "dark" ? darkMode : lightMode;

    return (
        <ThemeContext.Provider value={{color, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}
