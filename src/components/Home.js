import React from "react";
import Testbar from "./testComponent";
import PhotoComponent from "./PhotoComponent";
import MainContent from "./MainContent";
import Footer from "./Footer";
import "./../App.css";

function Home () {
	return (
		<div className="App">
			<Testbar />
			<PhotoComponent />
			<MainContent />
		</div>
	)
}

export default Home;