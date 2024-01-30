import { useContext } from "react";
import { SubTitle } from "../../shared/components/SubTitle/SubTitle";
import { FONT_SIZES, FONT_WEIGHTS } from "../../themes/fonts";
import { LIGHT_THEME } from "../../themes/light.theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeContextType } from "../../types/theme";

export default function Projects() {
	const { theme } = useContext(ThemeContext) as ThemeContextType;
	return (
		<article className={`side-spacing`}>
			<SubTitle
				fontWeight={FONT_WEIGHTS.REGULAR}
				fontSize={FONT_SIZES.SECTION_TITLE}
				color={theme.TEXT}
			>
				Projects
			</SubTitle>
		</article>
	);
}
