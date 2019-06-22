import React from 'react';
import styled from 'styled-components';
import VideoTeaser from './components/VideoTeaser'
import Button from './components/Button'

const ProductSnippet = styled.article`
	width: 100%;
	height: 100vh;
	min-height: 550px;
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: flex-end;
	background-color: rgba(0,0,0,0.2);
	padding-bottom: 2rem;
	@media screen and (min-width: 600px) {
		padding-bottom: 5rem;
	}
`;

const ProductSnippetDescription = styled.div`
	flex: 0 1 440px;
  max-width: 100%;
  padding: .5rem;
  color: #fff;
	@media screen and (min-width: 600px) {
		margin-left: 65%;
	}
	
	h1 {
		font-size: 2rem;
		font-weight: 800;
	  text-shadow: 0 1px 1px rgba(0,0,0,.25);
	  letter-spacing: .3px;
	  margin-bottom: 1.5rem;
	  @media screen and (min-width: 600px) {
	  	font-size: 2.5rem;
		}
	}
	
`;


export default (props) => (
	<ProductSnippet>
		<ProductSnippetDescription>
			<div>
				<h1>{props.title}</h1>
				<Button to={props.slug}>Buy for ${props.price}</Button>
			</div>
		</ProductSnippetDescription>
		<VideoTeaser video={props.video}/>
	</ProductSnippet>
)


