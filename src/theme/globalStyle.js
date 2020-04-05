// project global styles
import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

const GlobalStyle = createGlobalStyle`

	${normalize}

	* {box-sizing: border-box;}

	:root{
		--global-width: 1360px;
		--fs: 1rem;
		--ff: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
      
    --mobile: 500px;
	}

  body {
    font-family: var(--ff);
    font-size: var(--fs);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
 
 	a {
 		
	 	text-decoration: none;
 	}
  
`;

export default GlobalStyle;