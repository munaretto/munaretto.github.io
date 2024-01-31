import { ReactNode, createContext, useState } from "react";
import { Theme, ThemeContextType } from "../types/theme";
import { LIGHT_THEME } from "../themes/light.theme";
import styled from "styled-components";

type ThemeContextProps = {
	children?: ReactNode;
};

const AppWrapper = styled.section<{theme: Theme}>`
	height: 125vh;
	background-color: ${props => props.theme.BACKGROUND};
`;

export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({ children }: ThemeContextProps) {
	const [themeMode, setThemeMode] = useState<Theme>(LIGHT_THEME);

	return (
		<ThemeContext.Provider
			value={{ theme: themeMode, changeTheme: setThemeMode }}
		>
			<AppWrapper theme={themeMode}>{children}</AppWrapper>
		</ThemeContext.Provider>
	);
}
