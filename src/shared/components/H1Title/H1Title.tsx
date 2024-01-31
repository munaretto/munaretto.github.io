import styled from "styled-components";
import { TitleProps } from "../../../types/title";

export const H1Title = styled.h1<TitleProps>`
	color: ${(props: TitleProps) => props.color ?? ''};
	font-size: ${(props: TitleProps) => props.fontSize ?? ''};
	font-weight: ${(props: TitleProps) => props.fontWeight ?? ''};
`;