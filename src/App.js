import React from "react"; //for being able to use JSX
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import WorkExperience from "./components/WorkExperience";
import "./App.css";
import { Link } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
  	<Router>
  		<div>
  		<Route exact path="/" component={Home} />
  		<Route path="/aboutme" component={AboutMe} />
  		<Route path="/projects" component={Projects} />
  		<Route path="/workexperience" component={WorkExperience} />
  		<Route path="/contactme" component={ContactMe} />
  		</div>
  	</Router>
  )
}

export default App;