import {
	Navbar,
	NavbarCollapse,
	NavbarCollapseBtn,
	NavbarContainer,
	NavbarItem,
	NavbarList,
} from "aspect-ui/Navbar";
import React from 'react'

const Nav = () => {
  return (
		<Navbar collapseBreakpoint="md">
			<NavbarContainer>
				<NavbarList>
					<NavbarItem>
						<a href="#home">Home</a>
					</NavbarItem>
					<NavbarItem>
						<a href="#about">About</a>
					</NavbarItem>
					<NavbarItem>
						<a href="#contact">Contact</a>
					</NavbarItem>
					<NavbarItem>
						<a href="#services">Services</a>
					</NavbarItem>
				</NavbarList>
				<NavbarCollapseBtn />
				<NavbarCollapse>
					<NavbarItem>
						<a href="#home">Home</a>
					</NavbarItem>
					<NavbarItem>
						<a href="#about">About</a>
					</NavbarItem>
					<NavbarItem>
						<a href="#contact">Contact</a>
					</NavbarItem>
					<NavbarItem>
						<a href="#services">Services</a>
					</NavbarItem>
				</NavbarCollapse>
			</NavbarContainer>
		</Navbar>
	);
}

export default Nav