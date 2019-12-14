const theme = {
  color: {
    primary: '#0d5df2',
    light: '#fafafa',
  },
  breakpoints: ['769px', '1600px'],
  space: [0, '.25rem', '0.5rem', '1rem', '2rem', '3rem', '5rem'],
  fontSizes: [0, '.85rem', '1rem', '1.25rem', '1.6rem', '2.25rem', '3rem'],
  fontFamily: {
    base:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Helvetica Neue", sans-serif',
    title: 'Rubik, sans-serif;',
  },
  lineHeight: {
    base: 1.5,
    title: 1.2,
  },
  shadow: `0 1px 2px rgba(0, 0, 0, 0.25)`,
}

// spaces aliases
theme.space.xs = theme.space[1]
theme.space.sm = theme.space[2]
theme.space.n = theme.space[3]
theme.space.md = theme.space[4]
theme.space.lg = theme.space[5]
theme.space.xl = theme.space[6]

// font sizes aliases
theme.fontSizes.sm = theme.fontSizes[1]
theme.fontSizes.n = theme.fontSizes[2]
theme.fontSizes.md = theme.fontSizes[3]
theme.fontSizes.lg = theme.fontSizes[4]
theme.fontSizes.xl = theme.fontSizes[5]
theme.fontSizes.xxl = theme.fontSizes[6]

export default theme
