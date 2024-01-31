import styled from "styled-components";
import { Theme, ThemeContextType } from "../../types/theme";
import { useContext } from "react";
import { DARK_THEME } from "../../themes/dark.theme";
import { ThemeContext } from "../../contexts/ThemeContext";

export interface IAvatarProps {
	src: string;
	alt?: string;
}

const AvatarImg = styled.img<{theme: Theme}>`
	overflow: hidden;
	width: 130px;
	border-radius: 50%;
	filter: ${props => props.theme === DARK_THEME ? 'grayscale(100%)' : 'none'};
	-webkit-box-shadow: 8px 11px 31px -19px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 8px 11px 31px -19px rgba(0, 0, 0, 0.75);
	box-shadow: 8px 11px 31px -19px rgba(0, 0, 0, 0.75);
`;

export default function Avatar({ src, alt }: IAvatarProps) {
	const { theme } = useContext(ThemeContext) as ThemeContextType;
	return <AvatarImg theme={theme} src={src} alt={alt ?? ""} />;
}
