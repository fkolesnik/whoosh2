import React from 'react';
import Product from './Product';

import cin1 from './video/teaser-2-hd.mp4'
import cover1 from './img/teaser-2-cover.jpg'
//import cin2 from './video/teaser-1-hd.mov'
//import cin3 from './video/teaser-3-hd.mp4'
//import cin4 from './video/teaser-4-hd.mp4'
//import cin5 from './video/teaser-5-hd.mp4'

const products = [
	{
		id: '1',
		title: 'Long Textured Cotton Coat',
		slug: 'black-coat',
		price: 170,
		video: cin1,
		cover: cover1,
	},
]

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