import { ReactNode, createContext, useState } from "react";
import { Theme, ThemeContextType } from "../types/theme";
import styled from "styled-components";
import { DARK_THEME } from "../themes/dark.theme";

type ThemeContextProps = {
	children?: ReactNode;
};

const AppWrapper = styled.section<{theme: Theme}>`
	height: 100vh;
	background-color: ${props => props.theme.BACKGROUND};
`;

export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({ children }: ThemeContextProps) {
	const [themeMode, setThemeMode] = useState<Theme>(DARK_THEME);

	return (
		<ThemeContext.Provider
			value={{ theme: themeMode, changeTheme: setThemeMode }}
		>
			<AppWrapper theme={themeMode}>{children}</AppWrapper>
		</ThemeContext.Provider>
	);
}
