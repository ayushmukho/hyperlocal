import {
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
} from '@material-ui/core'
import { orange } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles';
import React, { useState } from 'react'
import useStyles from './styles'

const OrangeCheckbox = withStyles({
  root: {
    color: orange[400],
    '&$checked': {
      color: orange[700],
    },
  },
  checked: {},
})((props) => <Checkbox color='default' {...props} />)  
const BillingAddress = () => {
  const classes = useStyles()
  const [check, setCheck] = useState(false)
  return (
    <div>
      <Paper elevation={3} className={classes.paper}>
        <Grid container direction='column' spacing={5}>
          <Grid item>
            <h2>Billing Address</h2>
          </Grid>
          <Grid container item spacing={5}>
            <Grid item>
              <TextField id='firstName' label='First Name' variant='outlined' />
            </Grid>
            <Grid item>
              <TextField id='lastName' label='Last Name' variant='outlined' />
            </Grid>
          </Grid>
          <Grid item className={classes.root}>
            <TextField
              id='email'
              label='Email Address'
              variant='outlined'
              width='50%'
            />
          </Grid>
          <Grid item className={classes.root}>
            <TextField id='address' label='Street Address' variant='outlined' />
          </Grid>
          <Grid container item spacing={5}>
            <Grid item>
              <TextField id='city' label='City' variant='outlined' />
            </Grid>
            <Grid item>
              <TextField id='state' label='State/Province' variant='outlined' />
            </Grid>
          </Grid>
          <Grid container item spacing={5}>
            <Grid item>
              <TextField id='zip' label='Zip/Postal Code' variant='outlined' />
            </Grid>
            <Grid item>
              <TextField id='phone' label='Phone' variant='outlined' />
            </Grid>
          </Grid>
          <FormControlLabel
            className={classes.cb}
            control={<OrangeCheckbox name='checkedC' />}
            label='My billing and shipping address are the same'
            onChange={() => setCheck(!check)}
          />
        </Grid>
      </Paper>
      {!check ? (
        <Paper elevation={3} className={classes.paper}>
          <Grid container direction='column' spacing={5}>
            <Grid item>
              <h2>Shipping Address</h2>
            </Grid>
            <Grid container item spacing={5}>
              <Grid item>
                <TextField
                  id='firstName'
                  label='First Name'
                  variant='outlined'
                />
              </Grid>
              <Grid item>
                <TextField id='lastName' label='Last Name' variant='outlined' />
              </Grid>
            </Grid>
            <Grid item className={classes.root}>
              <TextField
                id='email'
                label='Email Address'
                variant='outlined'
                width='50%'
              />
            </Grid>
            <Grid item className={classes.root}>
              <TextField
                id='address'
                label='Street Address'
                variant='outlined'
              />
            </Grid>
            <Grid container item spacing={5}>
              <Grid item>
                <TextField id='city' label='City' variant='outlined' />
              </Grid>
              <Grid item>
                <TextField
                  id='state'
                  label='State/Province'
                  variant='outlined'
                />
              </Grid>
            </Grid>
            <Grid container item spacing={5}>
              <Grid item>
                <TextField
                  id='zip'
                  label='Zip/Postal Code'
                  variant='outlined'
                />
              </Grid>
              <Grid item>
                <TextField id='phone' label='Phone' variant='outlined' />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ) : null}
    </div>
  )
}

export default BillingAddress
