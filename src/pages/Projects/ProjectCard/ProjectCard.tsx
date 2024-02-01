import { ReactNode, useContext } from "react";
import { Project } from "../../../types/project";
import styled from "styled-components";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { Theme } from "../../../types/theme";
import styles from "./ProjectCard.module.css";
import { Text } from "./../../../shared/components/Text/Text";
import { FONT_SIZES, FONT_WEIGHTS } from "../../../themes/fonts";
import { H3Title } from "../../../shared/components/H3Title/H3Title";
import { Tag } from "../../../shared/components/Tag/Tag";

type ProjectCardProps = {
	children?: ReactNode;
	project: Project;
};

const CardWrapper = styled.section<{ theme: Theme }>`
	border: ${(props) => `1px solid ${props.theme.BORDER}`};
	background-color: ${(props) => props.theme.BACKGROUND};
	color: ${(props) => props.theme.TEXT};
	border-radius: 5px;
	-webkit-box-shadow: 13px 11px 27px -32px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 13px 11px 27px -32px rgba(0, 0, 0, 0.75);
	box-shadow: 13px 11px 27px -32px rgba(0, 0, 0, 0.75);
	width: 60vw;
	max-width: 220px;
`;

export default function ProjectCard({ project }: ProjectCardProps) {
	const { theme } = useContext(ThemeContext) as Theme;
	return (
		<CardWrapper theme={theme}>
			<section className={styles.imageWrapper}>Image</section>

			<section className={styles.contentWrapper}>
				<section className={styles.infoWrapper}>
					<H3Title
						color={theme.TEXT}
						fontWeight={FONT_WEIGHTS.SEMI_BOLD}
						fontSize={FONT_SIZES.REGULAR_TEXT}
					>
						{project.title}
					</H3Title>
					<Text color={theme.TEXT}>{project.description}</Text>
				</section>

				<section className={styles.techWrapper}>
					{project.technologies?.map((tech) => {
						return <Tag theme={theme}>{tech}</Tag>;
					})}
				</section>
			</section>
		</CardWrapper>
	);
}
