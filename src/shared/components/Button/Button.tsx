import styled from "styled-components";
import { IButtonStyling, IButtonProps } from "../../interfaces/IButton";
import { FONT_WEIGHTS } from "../../../themes/fonts";
import { Theme } from "../../../types/theme";

const AppButton = styled.button<IButtonStyling & Theme>`
	border-radius: 50px;
	cursor: ${(props) => props.cursor ?? "pointer"};

	background-color: ${props => props.theme.SECONDARY};
	color: ${props => props.theme.COLORED_BUTTON_TEXT};
	font-weight: ${FONT_WEIGHTS.SEMI_BOLD};
	padding: 8px 16px;
`;

export default function Button({
	children,
	isClickable,
	href,
	radius,
	cursor,
	theme
}: IButtonProps & IButtonStyling & Theme) {
	return (
		<AppButton
			{...{ radius, cursor, theme }}
			disabled={isClickable != null ? !isClickable : false}
		>
			{href ? (
				<a target="_blank" href={href}>
					{children}
				</a>
			) : (
				<>{children}</>
			)}
		</AppButton>
	);
}
