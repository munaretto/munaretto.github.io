import { ReactNode, useContext } from "react";
import LIGHT_THEME_SELECTOR_ICON from "../../assets/theme_selector_light.svg";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Theme, ThemeContextType } from "../../types/theme";
import { LIGHT_THEME } from "../../themes/light.theme";
import { DARK_THEME } from "../../themes/dark.theme";
import styled from "styled-components";

type ThemeSelectorProps = {
	children?: ReactNode;
};

export default function ThemeSelector({ children }: ThemeSelectorProps) {
	const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType;
	const handleThemeToggle = () => {
		/**
		 * Comparing objects like this works, because I know that both object's memory
		 * reference are not the same, and I'll only have these two theme
		 * objects in my whole project.
		 *
		 * I'm not interested in the individual properties of each object - specially
		 * because both are theme related objects and, because of that, need to
		 * have the same properties -, but in the object as a whole, so comparing them
		 * with deep equality here makes sense.
		 */
		changeTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
	};

	const ChangeThemeIcon = styled.svg<{theme?: Theme}>`
		fill: white;
		width: 24px;
		height: 24px;
		cursor: pointer;

		&:hover {
			fill: ${props => props.theme.TERTIARY ?? 'inherit'}
		}
	`;

	return (
		<section>
			<nav>
				<ChangeThemeIcon theme={theme} onClick={handleThemeToggle}>
					<path d="M15,24a12.021,12.021,0,0,1-8.914-3.966,11.9,11.9,0,0,1-3.02-9.309A12.122,12.122,0,0,1,13.085.152a13.061,13.061,0,0,1,5.031.205,2.5,2.5,0,0,1,1.108,4.226c-4.56,4.166-4.164,10.644.807,14.41a2.5,2.5,0,0,1-.7,4.32A13.894,13.894,0,0,1,15,24Zm.076-22a10.793,10.793,0,0,0-1.677.127,10.093,10.093,0,0,0-8.344,8.8A9.927,9.927,0,0,0,7.572,18.7,10.476,10.476,0,0,0,18.664,21.43a.5.5,0,0,0,.139-.857c-5.929-4.478-6.4-12.486-.948-17.449a.459.459,0,0,0,.128-.466.49.49,0,0,0-.356-.361A10.657,10.657,0,0,0,15.076,2Z" />
				</ChangeThemeIcon>
			</nav>

			{children}
		</section>
	);
}
