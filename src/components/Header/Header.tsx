import styled from "styled-components";

export default function Header() {
    const HeaderMenu = styled.ol`
    
    `

    const HeaderMenuItem = styled.li`
    `
	return (
		<header>
			<HeaderMenu>
				<HeaderMenuItem><a href="/">muna</a></HeaderMenuItem>
				<HeaderMenuItem><a href="#about">about me</a></HeaderMenuItem>
				<HeaderMenuItem><a href="#projects">projects</a></HeaderMenuItem>
				<HeaderMenuItem><a href="#socials">socials</a></HeaderMenuItem>
			</HeaderMenu>
		</header>
	);
}
