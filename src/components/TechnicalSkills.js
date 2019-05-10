import React from "react";
import "./../App.css";
import BitImage from "./../bitImage.png";
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";

function TechnicalSkills() {
	return (
		<div className="row">
			<br />
			<br />
			<br />
			<div className="col-md-3">
				<Card bg="dark" text="white">
					<Card.Header>Web Technologies</Card.Header>
    				<Card.Body>
      					<Card.Text>
      						<ul>
	      						<li>JavaScript</li>
	      						<li>HibernateML5</li>
	      						<li>CSS3</li>
	      						<li>JQuery</li>
	      						<li>AJAX</li>
      						</ul>
      					</Card.Text>
    				</Card.Body>
				</Card>
			</div>
			<div className="col-md-3">
				<Card bg="dark" text="white">
					<Card.Header>Programming Languages</Card.Header>
    				<Card.Body>
      					<Card.Text>
      						<ul>
	      						<li>Java</li>
	      						<li>C,C++</li>
	      						<li>SQL</li>
	      						<li>PL/SQL</li>
	      						<li>Shell</li>
      						</ul>
      					</Card.Text>
    				</Card.Body>
				</Card>
			</div>
			<div className="col-md-3">
				<Card bg="dark" text="white">
					<Card.Header>Frameworks</Card.Header>
    				<Card.Body>
      					<Card.Text>
      						<ul>
	      						<li>J2EE</li>
	      						<li>Spring/Hibernate</li>
	      						<li>React</li>
	      						<li>Angular</li>
	      						<li>BootStrap</li>
      						</ul>
      					</Card.Text>
    				</Card.Body>
				</Card>
			</div>
			<div className="col-md-3">
				<Card bg="dark" text="white">
					<Card.Header>DB Management Systems</Card.Header>
    				<Card.Body>
      					<Card.Text>
      						<ul>
	      						<li>MySQL</li>
	      						<li>SQL Server</li>
	      						<li>HSQLDB</li>
	      						<li>DB2</li>
	      						<li>PostgreSQL</li>
      						</ul>
      					</Card.Text>
    				</Card.Body>
				</Card>
			</div>
		</div>
	)
}

export default TechnicalSkills;