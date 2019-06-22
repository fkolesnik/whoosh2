import React from 'react';
import styled from 'styled-components';


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
	<VideoTeaser poster={props.cover} autoPlay loop muted playsInline>
		<source src={props.video} type="video/mp4"/>
	</VideoTeaser>
)