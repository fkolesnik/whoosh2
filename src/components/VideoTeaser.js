import React from 'react';
import styled from 'styled-components';
import placeholder from '../img/teaser-2-placeholder.jpg';


const VideoTeaser = styled.video`
	position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  background-position: center;
  background-size: cover;

`;

export default (props) => (
	<VideoTeaser poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" autoPlay loop muted webkit-playsinline playsinline>
		<source
			src={props.video}
			type="video/mp4"/>
	</VideoTeaser>
)