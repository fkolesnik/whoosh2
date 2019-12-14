import styled from 'styled-components'
import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system'
import theme from './theme'

const titleExtra = [space, layout, color, typography, shadow]
const boxExtra = [
  space,
  layout,
  color,
  typography,
  shadow,
  flexbox,
  background,
  border,
  position,
  shadow,
]

export const Box = styled.div`
  ${boxExtra}
`

export const T1 = styled.h1`
  font-size: ${theme.fontSizes.lg};
  @media only screen and (min-width: ${theme.breakpoints[0]}) {
    font-size: ${theme.fontSizes.xl};
  }
  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes.xxl};
  }
  ${titleExtra}
`

export const T2 = styled.h2`
  font-size: ${theme.fontSizes.md};
  @media only screen and (min-width: ${theme.breakpoints[0]}) {
    font-size: ${theme.fontSizes.lg};
  }
  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes.xl};
  }
  ${titleExtra}
`

export const Button = styled.button`
  background-color: ${props => (props.error ? 'red' : theme.color.primary)};
  color: white;
  padding: 0.64rem 1.5rem;
  border-radius: 50px;
  border: none;
  font-weight: 600;
  font-size: ${theme.fontSizes.md};
  letter-spacing: 1px;
  cursor: pointer;
  outline: none;
  transition: filter 0.3s;
  :hover {
    filter:  ${props => (props.error ? 'none' : 'brightness(80%)')};
  }
`

export const LabelCircle = styled.div`
  width: 40px;
  height: 40px;
  background-color: #eee;
  box-shadow: ${theme.shadow};
  border-radius: 50%;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.8rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  animation: ${props =>
    props.error ? 'zzz 0.82s cubic-bezier(.36,.07,.19,.97)' : 'none'};
  outline: none;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  transition: border 0.15s;
  will-change: border;
  border: 3px solid ${props => (props.selected ? 'white' : 'transparent')};
  @keyframes zzz {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
  ${boxExtra}
`
