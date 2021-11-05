import React, { useState } from 'react'
import {
    Collapse,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import LocalAtmIcon from '@material-ui/icons/LocalAtm'

import useStyles from './styles'

const OrderReview = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div>
      <Paper elevation={3} className={classes.paper2}>
        <Grid container direction='column' spacing={5}>
          <Grid item>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary='Discount Code' />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem button className={classes.nested}>
                    <TextField
                      id='outlined-basic'
                      label='Enter your coupon code'
                      variant='outlined'
                      fullWidth={true}
                      margin="dense"
                    />
                </ListItem>
              </List>
            </Collapse>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default OrderReview
