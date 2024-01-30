import styled from "styled-components";
import { Theme } from "../../../types/theme";

export const HeaderWrapper = styled.section<{ theme: Theme }>`
	height: 30vh;
	position: relative;
	background-color: ${(props) => props.theme.PRIMARY};

	&:after {
		content: "";
		width: 100%;
		height: 14px;
		position: absolute;
		bottom: -0.3%;
		left: 0;
		-webkit-animation: bg-pan-right 24s ease infinite alternate;
		animation: bg-pan-right 24s ease infinite alternate;
		background-size: auto;
		background-repeat: repeat no-repeat;
		background-position: 47vw bottom;
		background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200  81' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 60L50 56C100 52 200 45 300 30C400 16 500 -6 600 1C700 8 800 45 900 60C1000 74 1100 67 1150 63L1200 60V81H1150C1100 81 1000 81 900 81C800 81 700 81 600 81C500 81 400 81 300 81C200 81 100 81 50 81H0V60Z' fill='%23${(props) => (props.theme.BACKGROUND as string).slice(1)}'/></svg>");
	}

	@-webkit-keyframes bg-pan-right {
		0% {
			background-position: 0% 25%;
		}
		100% {
			background-position: 100% 50%;
		}
	}
	@keyframes bg-pan-right {
		0% {
			background-position: 0% 25%;
		}
		100% {
			background-position: 100% 50%;
		}
	}
`;
