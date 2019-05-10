import React from "react";
import "./../App.css";
import AES from "./../aesglobal.gif";
import Amdocs from "./../amdocs-logo.jpg";
import mheLogo from "./../mhelogo.jpg";
import MHE from "./../MHE.png";
import MHE1 from "./../MHE1.png";
import amd from "./../amdocs.png";
import amd1 from "./../amdocs1.jpg";
import aesLogo from "./../aes.png";
import aes1 from "./../aes1.jpg";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Image, Card, Jumbotron, Badge } from 'react-bootstrap';

class WorkExperience extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
      		W1show: false,
      		W2show: false,
      		W3show: false,
    	};

    	this.W1showE = () => { this.setState({ W1show: true })};
    	this.W2showE = () => { this.setState({ W2show: true })};
    	this.W3showE = () => { this.setState({ W3show: true })};
    	
    	this.W1hide = () => { this.setState({ W1show: false })};
    	this.W2hide = () => { this.setState({ W2show: false })};
    	this.W3hide = () => { this.setState({ W3show: false })};
    	
	};

  	render () {
	  	const customStyle = {
			height: 300,
			padding: 0,
		};
  		return (
  		<div className="aboutme"  id="workexperience">
		<div className="container" style={{"max-width": "1300"}}>
			<h2 className="subComponentHeaders"> WORK EXPERIENCE </h2>
			<div className="row">
				<div className="col-sm-4 my-auto" onClick={this.W1showE} style={{cursor: "pointer"}}>
					<div className="card bg-dark border-dark text-white cont">
						<Image className="bgimg" src={mheLogo} rounded/>
						<div className="card-img-overlay ovl">
							<div>
								<h6 className="card-title text-light text-center">McGRAW HILL EDUCATION</h6>
								<hr style={{"borderTopColor": "white"}}/>
								<h6 className="card-title text-light text-center">SOFTWARE ENGINEER</h6>
							</div>
						</div>
					</div>
				</div>
				<Modal size="lg" show={this.state.W1show} onHide={this.W1hide} >
					<Modal.Header closeButton>
            			<Modal.Title>MCGRAW HILL EDUCATION <a href="https://www.mheducation.com/" target="__blank">[Site]</a></Modal.Title>
          			</Modal.Header>
          			<Modal.Body>
          				<div className="jumbotron bg-dark text-white jumbo workexpBackground" style={customStyle}>
          					<Image src={MHE1} rounded style={{"height": "100%", "width": "100%"}}/>
          				</div>
						<ul>
							<li>Design, develop, implement and test ALEKS software programming applications, including advanced ALEKS tools and features.</li>
							<li>Wrote and implemented scripts to enhance user experience and integrated scripts with CMS.</li>
							<li>Analyze, expand and recreate content management tools and features.</li>
							<li>Contribute towards overall improvement of ALEKS internal system and existing architecture.</li>
							<li>Develop and promote effective unit testing for better quality.</li>
							<li><b>Environment: JavaScript, Java, HTML5, CSS3, JSON, JQuery, AJAX, SQL, Jasmine</b></li>
						</ul>
          			</Modal.Body>
          			<Modal.Footer>
            			<Button variant="info" onClick={this.W1hide}>Close</Button>
          			</Modal.Footer>
        		</Modal>
				
				<div className="col-sm-4 my-auto" onClick={this.W2showE} style={{cursor: "pointer"}}>
					<div className="card bg-dark border-dark text-white cont">
						<Image className="bgimg" src={aesLogo} rounded/>
						<div className="card-img-overlay ovl">
							<div>
								<h6 className="card-title text-light text-center "> AES GLOBAL</h6>
								<hr style={{"borderTopColor": "white"}}/>
								<h6 className="card-title text-light text-center"> SOFTWARE ENGINEER</h6>
							</div>	
						</div>
					</div>
				</div>
				<Modal size="lg" show={this.state.W2show} onHide={this.W2hide}>
					<Modal.Header closeButton>
            			<Modal.Title>AES Global <a href="http://www.aesglobal.com/" target="__blank">[Site]</a></Modal.Title>
          			</Modal.Header>
          			<Modal.Body>
          				<div className="jumbotron bg-info text-white jumbo" style={customStyle}>
          					<Image src={aes1} rounded style={{"height": "100%", "width": "100%"}}/>
          				</div>
						<ul>
							<li>Designed, implemented and tested RESTful web application using Spring MVC framework.</li>
							<li>Programmed a single sign on platform for client registration and process tracking.</li>
							<li>Created extensive logger to analyze and record customer transactions.</li>
							<li>Assisted with user-acceptance testing and defect tracking for new software releases.</li>
							<li>Modified and maintained internal portal software for staff.</li>
							<li>Worked closely with clients to establish problem specifications and system designs.</li>
							<li><b>Environment: AngularJS, Java, J2EE, Spring MVC, SQL Server 2012/14, HTML5, CSS3, Junit</b></li>
						</ul>
          			</Modal.Body>
          			<Modal.Footer>
            			<Button variant="info" onClick={this.W2hide}>Close</Button>
          			</Modal.Footer>
        		</Modal>
				<div className="col-sm-4 my-auto" onClick={this.W3showE} style={{cursor: "pointer"}}>
					<div className="card bg-dark border-dark text-white cont">
						<Image className="bgimg" src={amd} rounded/>
						<div className="card-img-overlay ovl">
							<div>
								<h6 className="card-title text-light text-center ">AMDOCS DVCI</h6>
								<hr style={{"borderTopColor": "white"}}/>
								<h6 className="card-title text-light text-center"> SOFTWARE ENGINEER</h6>
							</div>
						</div>
					</div>
				</div>
				<Modal size="lg" show={this.state.W3show} onHide={this.W3hide}>
					<Modal.Header closeButton>
            			<Modal.Title>Amdocs <a href="https://www.amdocs.com/" target="__blank">[Site]</a></Modal.Title>
          			</Modal.Header>
          			<Modal.Body>
          				<div className="jumbotron bg-info text-white jumbo" style={customStyle}>
          					<Image src={amd1} rounded style={{"height": "100%", "width": "100%"}}/>
          				</div>
						<ul>
							<li>Built, developed and deployed highly available and modular software products.</li>
							<li>Designed and developed enterprise ordering system for enterprise customer.</li>
							<li>Worked on both client side and server side parts of the system.</li>
							<li>Troubleshoot software issues using standard debugging techniques and coding techniques.</li>
							<li>Performed risk assessment and research by closely monitoring test cases.</li>
							<li>Collaborated with product management to test, design and build billing systems.</li>
							<li><b>Environment: Java, J2EE, Spring MVC, JDBC, Unix, JBoss, Junit, Selenium, Cucumber, SVN</b></li>
						</ul>
          			</Modal.Body>
          			<Modal.Footer>
            			<Button variant="info" onClick={this.W3hide}>Close</Button>
          			</Modal.Footer>
        		</Modal>
			</div>
		</div>
	</div>
	);
  }

}

export default WorkExperience;