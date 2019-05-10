import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from 'react-router-dom';

class CustomNavbar extends Component {
	render () {
		return (
			<Navbar default collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/"> Akanksha Jain </Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				
				<Navbar.Collapse>
				<Nav pullRight>
					<NavItem eventKey={1} componentClass={Link} href="/" to="/">
					Home
					</NavItem>
					<NavItem eventKey={2} componentClass={Link} href="/aboutme" to="/aboutme">
					About Me
					</NavItem>
					<NavItem eventKey={3} componentClass={Link} href="/projects" to="/projects">
					Projects
					</NavItem>
					<NavItem eventKey={4} componentClass={Link} href="/workexperience" to="/workexperience">
					Work Experience
					</NavItem>
					<NavItem eventKey={5} componentClass={Link} href="/contactme" to="/contactme">
					Contact Me
					</NavItem>
				</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default CustomNavbar;