import styles from "./Header.module.css";
import ThemeSelector from "./../ThemeSelector/ThemeSelector";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import Avatar from "../Avatar/Avatar";
import avatarImg from "../../assets/avatar_mock.jpg";
import styled from "styled-components";
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from "../../styling/variables";
import { Title } from "../../shared/components/Title/Title";
import { SubTitle } from "../../shared/components/SubTitle/SubTitle";

export default function Header() {
	return (
		<header>
			<section className={styles.background}>
				<section className={styles.options}>
					<ThemeSelector />
					<LanguageSelector />
				</section>

				<section className={styles.aboutInfo}>
					<Avatar src={avatarImg} />
					<SubTitle
						fontWeight={FONT_WEIGHTS.SEMI_BOLD}
						fontSize={FONT_SIZES.MAIN_TITLE}
						color={COLORS.TEXT}
					>
						Guilherme Munaretto
					</SubTitle>
					<Title
						fontWeight={FONT_WEIGHTS.REGULAR}
						fontSize={FONT_SIZES.SUB_TITLE}
						color={COLORS.TEXT}
					>
						Software developer based in Portugal
					</Title>

					<section className={styles.socials}>
						<p>LinkedIn</p>
						<p>Github</p>
						<p>Email</p>
					</section>
				</section>
			</section>
		</header>
	);
}
