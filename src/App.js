import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";
import CoinPrices from "./components/CoinPrices";
import Wallet from "./components/Wallet";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/wallet" element={<Wallet />} />
				<Route path="/prices" element={<CoinPrices />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
