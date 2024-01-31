import { useContext } from "react";
import { H2Title } from "../../shared/components/H2Title/H2Title";
import { FONT_SIZES, FONT_WEIGHTS } from "../../themes/fonts";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeContextType } from "../../types/theme";
import Carousel, { CarouselItem } from "../../shared/components/Carousel/Carousel";
import styles from './Projects.module.css';
import { PROJECTS } from "../../models/projects";
import ProjectCard from "./ProjectCard/ProjectCard";

export default function Projects() {
	const { theme } = useContext(ThemeContext) as ThemeContextType;
	return (
		<article className={`${styles.wrapper} side-spacing`}>
			<H2Title
				fontWeight={FONT_WEIGHTS.REGULAR}
				fontSize={FONT_SIZES.SECTION_TITLE}
				color={theme.TEXT}
			>
				Projects
			</H2Title>
			<section>
				<Carousel>
					{(PROJECTS || [])?.map(project => {
						return <CarouselItem key={project.title}>
							<ProjectCard project={project}/>
						</CarouselItem>
					})}
				</Carousel>
			</section>
		</article>
	);
}
