import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import Product from './Product'
import Homepage from './Homepage'
import GlobalStyle from './theme/globalStyle'
import Header from "./components/Header";
import Footer from "./components/Footer";


/*import cin1 from './videos/sklz58v805nr0f6al9om.tablet.mp4'
import cin2tablet from './videos/9l1vz1ddf36fanyqkel3.tablet.mp4'
import cin2phone from './videos/9l1vz1ddf36fanyqkel3.phone.mp4'
import cin3 from './videos/t6ca9ju7ifyn6739b5ti.tablet.mp4'
import cin3phone from './videos/t6ca9ju7ifyn6739b5ti.phone.mp4'*/


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
