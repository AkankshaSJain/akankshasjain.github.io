import React from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import WorkExp from "./WorkExperience";
import Interests from "./interests.js";
import Resume from "./Resume.js";

function MainContent() {
	return (
		<div>
			<AboutMe />
			<Resume />
			<WorkExp />
			<ContactMe />
		</div>
	)
}

export default MainContent;