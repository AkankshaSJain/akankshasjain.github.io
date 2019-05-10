import React from "react";
import "./../App.css";
import BitImage from "./../bitImage.png";
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";

function Highlights() {
	return (
		<div className="highlights">
			<h5>Highlights</h5>
			<ul>
				<li>Software Engineer with 4+ years of experience in SDLC.</li>
				<li>Strong understanding of Object Oriented Programming, Object Oriented Design, Data Structures and Algorithms.</li>
				<li>Expertise in developing and maintaining web applications built using Java, J2EE, JavaScript, AngularJS, XML, HTML5, CSS3, JQuery and JSON.</li>
				<li>Working experience of MYSQL, SQL Server2012/14, DB2.</li>
				<li>Sound knowledge in Service Oriented Architecture and SaaS application using RESTful web services.</li>
				<li>Passionate about writing clean code, optimize code to improve future scalability, code quality and better construction of unit test cases.</li>
				<li>Worked with various methodologies including Agile, Waterfall and Test Driven Development.</li>
				<li>Working knowledge of GitHub, Confluence, Jira, Jasmine and Linux based server architecture.</li>
			</ul>
		</div>
	)
}

export default Highlights;