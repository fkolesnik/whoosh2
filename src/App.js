import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import ProductPage from './ProductPage'
import Homepage from './Homepage'
import GlobalStyle from './theme/globalStyle'
import Header from "./components/Header";
import Footer from "./components/Footer";

export default () => {
	return (
		<Router>
			<GlobalStyle/>
			<Header/>
			<Route path="/product/:slug" component={ProductPage}/>
			<Route path="/" exact component={Homepage} />
			<Footer/>
		</Router>
	);
}
