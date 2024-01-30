import { ReactNode, createContext, useState } from "react";
import { Theme, ThemeContextType } from "../types/theme";
import { LIGHT_THEME } from "../themes/light.theme";
import styled from "styled-components";

type ThemeContextProps = {
	children?: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({ children }: ThemeContextProps) {
	const [themeMode, setThemeMode] = useState<Theme>(LIGHT_THEME);
	const AppWrapper = styled.section`
        height: 100vh;
        background-color: ${themeMode.BACKGROUND};
    `;
	return (
		<ThemeContext.Provider
			value={{ theme: themeMode, changeTheme: setThemeMode }}
		>
			<AppWrapper>{children}</AppWrapper>
		</ThemeContext.Provider>
	);
}
