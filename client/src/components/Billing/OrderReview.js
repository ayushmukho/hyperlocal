import React, { useState } from 'react'
import {
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
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
                <ShoppingBasketIcon />
              </ListItemIcon>
              <ListItemText primary='Order Review' />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default OrderReview
