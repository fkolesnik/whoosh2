import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`

*, *:before, *:after {
	box-sizing: border-box;
}

body {
	font-family: ${theme.fontFamily.base};
	line-height: ${theme.lineHeight.base};
	margin: 0;
}

a {
	color: ${theme.color.primary};
	text-decoration: none;
}

h1, h2, h3, h4, form {
	margin-bottom: ${theme.space.n};
	font-family: ${theme.fontFamily.title};
	line-height: ${theme.lineHeight.title};
}

p {
	margin-top: 0;
	margin-bottom: ${theme.space.n};
}

small {font-size: 80%;}

`

export default GlobalStyle
