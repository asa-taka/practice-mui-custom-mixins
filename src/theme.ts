import { createMuiTheme } from '@material-ui/core/styles'

import createMixins from '@material-ui/core/styles/createMixins'
import { CSSProperties } from '@material-ui/core/styles/withStyles'

// interface declaration merging to add custom mixins
declare module '@material-ui/core/styles/createMixins' {
  interface Mixins {
    myBackgroundMixin: CSSProperties,
  }
}

// get original configs to be used for following `createMixins`
const { breakpoints, spacing } = createMuiTheme()

const mixins = createMixins(breakpoints, spacing, {
  myBackgroundMixin: {
    backgroundColor: '#ff0000'
  }
})

export default createMuiTheme({
  mixins,
  palette: {
    divider: '#ff0000'
  },
})