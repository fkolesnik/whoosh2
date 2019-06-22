import React from 'react';
import Product from './Product';

import cin1 from './video/teaser-2-hd.mp4'
import cin2 from './video/teaser-1-hd.mov'
import cin3 from './video/teaser-3-hd.mp4'
import cin4 from './video/teaser-4-hd.mp4'
import cin5 from './video/teaser-5-hd.mp4'

const products = [
	{
		id: '1',
		title: 'Long Textured Cotton Coat',
		slug: 'black-coat',
		price: 170,
		video: cin1,
	},
	{
		id: '3',
		title: 'Short Black Coat',
		slug: 'black-coat-2',
		price: 140,
		video: cin3,
	},
	{
		id: '2',
		title: 'Short Black Coat',
		slug: 'black-coat-2',
		price: 140,
		video: cin2,
	},
	{
		id: '4',
		title: 'Short Black Coat',
		slug: 'black-coat-2',
		price: 140,
		video: cin4,
	},
	{
		id: '5',
		title: 'Short Black Coat',
		slug: 'black-coat-2',
		price: 140,
		video: cin5,
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
			/>
		)}
	</React.Fragment>
)