import React from "react";
import Photo from "./../profilepic.jpg";
import Programming from "./../coding.png";
import Reading from "./../reading.png";
import Travel from "./../travel.png";
import Test from "./../test.jpg";
import Eat from "./../eating.jpg";
import Hiking from "./../hiking.png";
import Dance from "./../dancing.jpg";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import "./../App.css";

function Interests () {
	return (
		<div className="container">
			<br />
			<h4 className="text-center"> <Badge variant="dark"> Some things I am passionate about</Badge></h4>
			<br />
			<div className="row">
				<div className="col-sm-2">
					<div className="subcont">
						<Image className="subphoto" src={Programming}  roundedCircle/>
						<div className="subovl">CODING</div>
					</div>
				</div>
				<div className="col-sm-2">
					<div className="subcont">
						<Image className="subphoto" src={Reading}  roundedCircle/>
						<div className="subovl">READING</div>
					</div>
				</div>
				<div className="col-sm-2">
					<div className="subcont">
						<Image className="subphoto" src={Travel}  roundedCircle/>
						<div className="subovl">TRAVELING</div>
					</div>
				</div>
				<div className="col-sm-2">
					<div className="subcont">
						<Image className="subphoto" src={Eat}  roundedCircle/>
						<div className="subovl">EATING</div>
					</div>
				</div>
				<div className="col-sm-2">
					<div className="subcont">
						<Image className="subphoto" src={Hiking}  roundedCircle/>
						<div className="subovl">HIKING</div>
					</div>
				</div>
				<div className="col-sm-2">
					<div className="subcont">
						<Image className="subphoto" src={Dance}  roundedCircle/>
						<div className="subovl">DANCING</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Interests;