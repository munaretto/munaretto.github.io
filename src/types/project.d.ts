export type Project = {
	title: string;
	description: string;
	technologies: Technologies[];
	role: string,
	screenshots?: string[];
	website?: string;
	repository?: string;
}