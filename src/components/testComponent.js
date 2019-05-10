import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./../App.css";

class testComponent extends Component {
	render () {
		return (
			<div className="container">
				<nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="/">AKANKSHA JAIN</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#aboutme">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">RESUME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#workexperience">EXPERIENCE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactme">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
			</div>
		);
	}
}

export default testComponent;