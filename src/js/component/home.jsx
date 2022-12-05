import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//import data
import data from "../data.json";

//create your first component
const Home = () => {

	const cardMap = data.map((item)=>{
		return <Card item={item}/>
	});

	return (
		<>
			<Navbar />
			<div className="container p-0">
				<Jumbotron />
				<div className="row p-0 justify-content-between">
					{cardMap}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
