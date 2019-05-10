import React from "react";
import "./../App.css";
import BitImage from "./../bitImage.png";
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";
import Interests from "./interests.js";
import HighLights from "./Highlights.js";
import TechnicalSkills from "./TechnicalSkills.js";

function AboutMe() {
	const customStyle = {
		backgroundImage: "url(" + BitImage + ")",
	};
	return (
		<div className="aboutme"  id="aboutme">
		<div className="container-fluid">
			<p className="h5 about"> HELLO, I'M AKANKSHA </p>
			<Interests />
			<HighLights />
		</div>
		</div>
	)
}

export default AboutMe;