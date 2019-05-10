import React from "react";
import Photo from "./../profilepic.jpg";
import Programming from "./../prg.jpg";
import Reading from "./../read.jpg";
import Travel from "./../travel.jpg";
import Eat from "./../eat.png";
import Hiking from "./../hiking.png";
import Dance from "./../dance.png";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import "./../App.css";

function PhotoComponent () {
	return (
		<div className="jumbotron jumbotron-fluid bg-dark text-white jumbo imageFull">
			<div className="container text-center">
				<br />
				<br />
				<br />
				<br />
				<br />
				<p className="h2" style={{"font-weight": "normal"}}>AKANKSHA JAIN</p>
				<br />
				<br />
				<Image className="photo" src={Photo}  roundedCircle/>
				<br />
				<br />
				<p className="h6" style={{"width": 600, "display": "inline-block"}}>I work as a Software Engineer for McGraw Hill Education in Irvine, CA. I'm passionate about creating applications that live on the internet.</p>
			</div>
		</div>
	)
}

export default PhotoComponent;