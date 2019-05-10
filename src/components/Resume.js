import React from "react";
import "./../App.css";
import Button from 'react-bootstrap/Button';
import Pdf from './../resume.pdf';

function Resume() {
	return (
		<div className="jumbotron-fluid bg-dark d-flex align-items-center text-white resume" id="resume">
			<div className="container text-center">
				<p className="h3" style={{"font-weight": "normal"}}>CHECK OUT MY RESUME</p>
				<br />
				<Button variant="outline-primary"> <a style={{"color": "white"}} href={Pdf} target="_blank"> RESUME </a></Button>
				<br />
			</div>
		</div>
	)
}

export default Resume;