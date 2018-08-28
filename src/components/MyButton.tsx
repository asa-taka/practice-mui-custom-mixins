import * as React from 'react'

import Button from '@material-ui/core/Button'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'

interface Props extends WithStyles<typeof styles> {
  name: string
}

function MyButton({ classes, name }: Props) {
  return (
    <Button className={classes.root}>
      {name}
    </Button>
  )
}

const styles = ({ mixins, palette }: Theme) => createStyles({
  root: {
    ...mixins.myBackgroundMixin,
    color: palette.common.white,
  }
})

export default withStyles(styles)(MyButton)