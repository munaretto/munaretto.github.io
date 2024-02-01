import styled from "styled-components";
import { Theme } from "../../../types/theme";
import { FONT_SIZES, FONT_WEIGHTS } from "../../../themes/fonts";

type TagProps = {
    theme: Theme;
    cursor?: string;
}

export const Tag = styled.button<TagProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    cursor: ${props => props.cursor ?? 'unset'};
    background-color: ${props => props.theme.SECONDARY};
    color: ${props => props.theme.COLORED_BUTTON_TEXT};
    font-weight: ${FONT_WEIGHTS.SEMI_BOLD};
    border-radius: 5px;
    font-size: ${FONT_SIZES.CARD_TEXT}
`