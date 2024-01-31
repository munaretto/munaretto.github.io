import { Technologies } from "../enums/technologies.enum";
import { Project } from "../types/project";

export const PROJECTS : Project[] = [
	{
		title: 'Portfolio',
		description: 'This is my portfolio project',
		role: 'I developed everything',
		technologies: [
			Technologies.REACT,
			Technologies.HTML5,
			Technologies.CSS
		],
	}
]