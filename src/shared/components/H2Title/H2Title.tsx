import styled from "styled-components";
import { TitleProps } from "../../../types/title";

export const H2Title = styled.h2<TitleProps>`
    color: ${(props: TitleProps) => props.color ?? ''};
	font-size: ${(props: TitleProps) => props.fontSize ?? ''};
	font-weight: ${(props: TitleProps) => props.fontWeight ?? ''};
`