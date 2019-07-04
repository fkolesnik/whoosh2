import React from 'react';
import styled from 'styled-components';


const VideoTeaser = styled.video`
	position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  min-width: 100%;
  min-height: 100%;
	width: auto;
	height: auto;
  z-index: -1;
  background-position: center;
  background-size: cover;
  
  &::-webkit-media-controls {
  	display: none !important;
  	opacity: 0;
  }
  
  &::-webkit-media-controls-start-playback-button {
  	display: none !important;
    -webkit-appearance: none;
    opacity: 0;
	}
	
	&::-webkit-media-controls-overlay-play-button {
      display: none;
    }
`;

export default (props) => (
	<VideoTeaser poster={props.cover} autoPlay loop muted playsInline>
		<source src={props.video} type="video/mp4"/>
	</VideoTeaser>
)