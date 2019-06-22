import React from 'react';
import products from './data/products'


class ProductPage extends React.Component {
	
	state = {
		product: null,
	};
	
	componentDidMount() {
		let product = products.filter(product => product.slug === this.props.match.params.slug)
		this.setState({product: product[0]})
	}
	
	render() {
		const {product} = this.state
		return (
			<div style={{
				textAlign: 'center',
				background: '#eee',
				paddingTop: '30vh'
			}}>
				<h1>Product: {product && product.title} {console.log(this.props)}</h1>
			</div>
		);
	}
}

export default ProductPage;