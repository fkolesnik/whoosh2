import React from 'react';
import Product from './Product';
import products from './data/products'

export default () => (
	<React.Fragment>
		{products && products.map(product =>
			<Product
				title={product.title}
				slug={product.slug}
				price={product.price}
				key={product.id}
				video={product.video}
				cover={product.cover}
			/>
		)}
	</React.Fragment>
)