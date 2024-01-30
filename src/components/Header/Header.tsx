import styles from "./Header.module.css";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContextType } from "../../types/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HeaderWrapper } from "../../shared/components/HeaderWrapper/HeaderWrapper";

export default function Header() {
	const { theme } = useContext(ThemeContext) as ThemeContextType;
	
	return (
		<header>
			<HeaderWrapper theme={theme} className={`side-spacing ${styles['top-spacing']}`}>
				<section className={styles.options}>
					<ThemeSelector />
				</section>
			</HeaderWrapper>
		</header>
	);
}
