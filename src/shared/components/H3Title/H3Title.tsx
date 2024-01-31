import styled from "styled-components";
import { TitleProps } from "../../../types/title";

export const H3Title = styled.h3<TitleProps>`
	color: ${(props: TitleProps) => props.color ?? ""};
	font-size: ${(props: TitleProps) => props.fontSize ?? ""};
	font-weight: ${(props: TitleProps) => props.fontWeight ?? ""};
`;
