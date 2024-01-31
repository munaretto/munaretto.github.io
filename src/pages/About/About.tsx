import Avatar from "../../components/Avatar/Avatar";
import Button from "../../shared/components/Button/Button";
import { H2Title } from "../../shared/components/H2Title/H2Title";
import { H1Title } from "../../shared/components/H1Title/H1Title";
import { FONT_WEIGHTS, FONT_SIZES } from "../../themes/fonts";
import styles from "./About.module.css";
import avatarImg from "../../assets/avatar.jpeg";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeContextType } from "../../types/theme";

enum SOCIAL_URLS {
    LINKEDIN = 'https://www.linkedin.com/in/olvmuna/',
    GITHUB = 'https://github.com/munaretto',
    EMAIL = 'mailto:munaretto.guilherme@gmail.com'
}

export default function About() {
	const { theme } = useContext(ThemeContext) as ThemeContextType;
	return (
		<section className={`side-spacing ${styles.aboutInfo}`}>
			<Avatar src={avatarImg} />
			<H2Title
				fontWeight={FONT_WEIGHTS.SEMI_BOLD}
				fontSize={FONT_SIZES.MAIN_TITLE}
				color={theme.TEXT}
			>
				Guilherme Munaretto
			</H2Title>
			<H1Title
				fontWeight={FONT_WEIGHTS.REGULAR}
				fontSize={FONT_SIZES.SUB_TITLE}
				color={theme.TEXT}
			>
				Software developer based in Portugal
			</H1Title>

			<section className={styles.socials}>
				<Button theme={theme} href={SOCIAL_URLS.LINKEDIN} radius="50px">LinkedIn</Button>
				<Button theme={theme} href={SOCIAL_URLS.GITHUB} radius="50px">Github</Button>
				<Button theme={theme} href={SOCIAL_URLS.EMAIL} radius="50px">Email</Button>
			</section>
		</section>
	);
}
