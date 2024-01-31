import styled from "styled-components";
import { FONT_WEIGHTS } from "../../../themes/fonts";
import { TitleProps } from "../../../types/title";

export const Text = styled.p<TitleProps>`
	font-size: ${(props) => props.fontSize ?? "12px"};
	color: ${(props) => props.color};
	font-weight: ${(props) => props.fontWeight ?? FONT_WEIGHTS.REGULAR};
	margin: 8px 0;
	padding: 0;
`;
