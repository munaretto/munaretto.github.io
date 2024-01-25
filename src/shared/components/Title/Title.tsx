import styled from "styled-components";
import { ITitle } from "../../interfaces/ITitle";

export const Title = styled.h1<ITitle>`
	color: ${(props: ITitle) => props.color ?? ''};
	font-size: ${(props: ITitle) => props.fontSize ?? ''};
	font-weight: ${(props: ITitle) => props.fontWeight ?? ''};
	text-wrap: nowrap;
`;