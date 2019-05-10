import React, { Component } from "react";
import "./../App.css";
import { Form, FormGroup, Button } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';

class ContactMe extends Component {
	render() {
		return (
			<div className="container-fluid bg-dark text-center" id="contactme">
				<h3 className="text-center text-white"> CONTACT </h3>

				<br />
				<br />

				<p className="h6 text-center text-white">Shoot me an email or just say Hello</p>
				<p className="h6 text-center text-white">aksyjain@gmail.com</p>
				<div className="foot">
					<p style={{margin: "unset"}}> This website is designed and developed by Akanksha Jain.</p>
					<p style={{margin: "unset"}}> © Akanksha Jain 2019 </p>
				</div>
				<br />
				<div>
					<SocialIcon url="https://www.linkedin.com/in/ajain91/" />
					<SocialIcon url="https://github.com/AkankshaSJain" />
					<SocialIcon url="https://www.instagram.com/sunkissedbae_aj/" />
				</div>
				<br />
				<br />
				<br />
			</div>
		)
	}
}

export default ContactMe;