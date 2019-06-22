import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import Product from './Product'
import Homepage from './Homepage'
import GlobalStyle from './theme/globalStyle'
import Header from "./components/Header";
import Footer from "./components/Footer";

export default () => {
	return (
		<Router>
			<GlobalStyle/>
			<Header/>
			<Route component={Product} path="/product"/>
			<Route component={Homepage} path="/" exact/>
			<Footer/>
		</Router>
	);
}
