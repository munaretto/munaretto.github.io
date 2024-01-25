import styled from "styled-components";
import { ITitle } from "../../interfaces/ITitle";

export const SubTitle = styled.h2<ITitle>`
    color: ${(props: ITitle) => props.color ?? ''};
	font-size: ${(props: ITitle) => props.fontSize ?? ''};
	font-weight: ${(props: ITitle) => props.fontWeight ?? ''};
`