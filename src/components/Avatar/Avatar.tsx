import styled from "styled-components";

export interface IAvatarProps {
	src: string;
	alt?: string;
}

const AvatarImg = styled.img`
	overflow: hidden;
	width: 130px;
	border-radius: 50%;
	filter: grayscale(100%);
	-webkit-box-shadow: 8px 11px 31px -19px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 8px 11px 31px -19px rgba(0, 0, 0, 0.75);
	box-shadow: 8px 11px 31px -19px rgba(0, 0, 0, 0.75);
`;

export default function Avatar({ src, alt }: IAvatarProps) {
	return <AvatarImg src={src} alt={alt ?? ""} />;
}
