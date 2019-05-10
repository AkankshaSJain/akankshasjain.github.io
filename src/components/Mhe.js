import React from "react";
import "./../App.css";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import AES from "./../aesglobal.gif";
import Amdocs from "./../amdocs-logo.jpg";
import MHE from "./../mcgrawhill.jpg";
import JS from "./../js.png";
import Badge from 'react-bootstrap/Badge';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class WorkExperience extends React.Component {
	constructor(props) {
		super(props);

		this.handleShow = this.handleShow.bind(this);
    	this.handleClose = this.handleClose.bind(this);
    	this.state = {
      		show: false,
    	};
	};

	handleClose() {
    	this.setState({ show: false });
  	}

  	handleShow() {
    	this.setState({ show: true });
  	}

  	render () {
  		return (
		<div className="container" id="workexperience">
			<div className="row">
				<div className="col-sm-4 my-auto">
					<div className="card bg-dark text-white">
						<Image src={JS} rounded/>
						<div className="card-img-overlay ovl">
							<h5 className="card-title text-dark text-center "> MHE </h5>
							<h5 className="card-text text-danger text-center"> Software Engineer </h5>
							<h5 className="card-text text-center"> 
								<Button className="btn btn-info" onClick={this.toggle}> Learn More </Button>
								<Modal isOpen={this.state.modal}>
								<form onSubmit 
							</h5>
						</div>
					</div>
				</div>
				<div className="col-sm-4 my-auto">
					<div className="card bg-dark text-white">
						<Image src={JS} rounded/>
						<div className="card-img-overlay ovl">
							<h5 className="card-title text-dark text-center "> AES Global </h5>
							<h5 className="card-text text-danger text-center"> Software Engineer </h5>
							<h5 className="card-text text-center">
								<button type="button" className="btn btn-info">Learn More</button>
							</h5>
						</div>
					</div>
				</div>
				<div className="col-sm-4 my-auto">
					<div className="card bg-dark text-white">
						<Image src={JS} rounded/>
						<div className="card-img-overlay ovl">
							<h5 className="card-title text-dark text-center "> Amdocs </h5>
							<h5 className="card-text text-danger text-center"> Software Engineer </h5>
							<h5 className="card-text text-center">
								<button type="button" className="btn btn-info">Learn More</button>
							</h5>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<h2 className="subComponentHeaders"> Work Experience </h2>
			<div className="infoRow">
				<div className="infoColumn">
					<h2 className="subComponentHeaders"> McGraw Hill Education</h2>
					<ul>
						<li>Develop and test cross-platform server-side and client-side student assessment application</li>
						<li>Convert applications to run faster on a V8 JavaScript from older, custom language</li>
						<li>Designand build scalable, modular components for the internal teams to provide them with a stable production environment</li>
						<li>Development and maintenance of internal application used by other teams across MHE to build tools and create assignments and quizzes for student assessment</li>
						<li>Worked on creating new graph tool for assessment team</li>
						<li>Development and maintenance of new Connect2 application for the release of a new assess platform</li>
						<li>Develop and promote effective unit testing for better quality</li>
						<li><b>Environment: Java, JavaScript, AngularJS, HTML3, CSS3, JSON, SQL</b></li>
					</ul>
					<br/>
					<h2 className="subComponentHeaders"> AES Global INC</h2>
					<ul>
						<li>Designing and development of RESTful web application using Java based Spring MVC framework</li>
						<li>Developed a technical platform for client vendors</li>
						<li>Analyzed logs generated reports and identified failures</li>
						<li>Identified bug trends and participated in general QA initiatives</li>
						<li>Executed Sanity Testing to check the applications at high level to identify and fix any critical issue</li>
						<li>Assisted with user-acceptance testing and defect tracking for new software releases</li>
						<li>Performed unit testing and application testing using JUnit and coding techniques</li>
						<li><b>Environment: Java, J2EE, JSP, Servlets, Spring MVC, REST API, Session Management, Java Beans, SQL Server 2012/14, HTML5, CSS3, JavaScript, JQuery, Apache Tomcat, Eclipse, GitHub, Junit, Web Services</b></li>
					</ul>
				</div>
				<div className="infoColumn">
					<h2 className="subComponentHeaders">Amdocs DVCI</h2>
					<ul>
						<li>Designed and developed the web-tier using Html, JSP’s, Servlets and Java based spring framework</li>
						<li>Prepared Quality Assurance test plans, budgets and schedules</li>
						<li>Involved in the full life cycle of software design process and testing of functional and non-functional requirements</li>
						<li>Troubleshoot software issues using standard debugging techniques and coding techniques</li>
						<li>Performed risk assessment and research by closely monitoring test cases</li>
						<li>Identified, fixed, and scrupulously documented system bugs</li>
						<li>Built, tested and deployed scalable, highly available and modular software products</li>
						<li>Experience in Software Quality Assurance including manual and automation testing using Junit and Cucumber</li>
						<li><b>Environment: Core Java, J2EE, Spring MVC, IBM DB2, Java Multithreading, JDBC, Unix, JBoss, Web Technologies, Agile, Junit, Selenium, Cucumber, Microsoft Test Manager, SVN, Object Oriented Design</b></li>
					</ul>
					<br/>
					<h2 className="subComponentHeaders">Abaxis Software</h2>
					<ul>
						<li>Design and development of Job Portal Registration using Spring framework</li>
						<li>Developed server modules using Java Beans and Java Collections</li>
						<li>Interfaced server modules with GUI client and network configuration modules</li>
						<li>Integrated access to databases tables and develop Data Access Object (DAO) classes</li>
						<li>Prepared detailed implementation and functional requirements documentation and presented them to the client</li>
						<li><b>Environment: Java, Spring Framework, Java Beans, Java Collections, Computer Networks, MySQL, HTML, CSS, Eclipse</b></li>
					</ul>
				</div>
			</div>
		</div>
	);
  }

}

export default WorkExperience;