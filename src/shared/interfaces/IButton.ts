import { ReactNode } from "react";

export interface IButtonProps {
	children?: ReactNode;
    isClickable?: boolean;
    href?: string;
}

export interface IButtonStyling {
    radius?: string;
    cursor?: string;
}