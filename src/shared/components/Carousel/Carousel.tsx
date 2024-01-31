import { ReactNode } from "react";
import styled from "styled-components";
import styles from "./Carousel.module.css";

type CarouselProps = {
	children?: ReactNode;
	infiniteScroll?: boolean;
};

const CarouselWrapper = styled.ul`
	display: flex;
	align-items: center;
    flex-wrap: wrap;
    gap: 16px;
	list-style-type: none;
	padding: 0;
	margin: 0;
`;

export const CarouselItem = styled.li`
	text-decoration: none;
	margin-bottom: 8px;
`;

export default function Carousel({
	children,
	infiniteScroll = true,
}: CarouselProps) {
	return (
		<CarouselWrapper className={infiniteScroll ? styles.infinite : ''}>
			{children}
		</CarouselWrapper>
	);
}
