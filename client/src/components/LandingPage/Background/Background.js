import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles.js'
import RightG from '../../../images/right-g.svg'
import LeftG from '../../../images/left-g.svg'

function Index() {
  const classes = useStyles()

  return (
    <Grid item container direction='column' className={classes.all}>
      <Grid item container>
        <Grid item xs={1} md={1}>
          <img
            alt=''
            src='https://static.overlay-tech.com/assets/d7fb6779-807e-48f2-91f2-247d050ec31c.svg'
            //yellow circle
          />
        </Grid>
        <Grid item container xs={1} md={6} direction='column'>
          <Grid item className={classes.middle1}>
            <img
              alt=''
              src='https://static.overlay-tech.com/assets/13d9910e-d112-4210-96e0-21f7c1d5a532.svg'
              //shopping app...
            />
          </Grid>
          <Grid item className={classes.middle2}>
            <img
              alt=''
              src='https://static.overlay-tech.com/assets/57c7b06b-a9b5-43e2-b8d4-fbf78c2bba7a.svg'
              //get 10%...
            />
          </Grid>
          <Grid item className={classes.middle2}>
            <img
              alt=''
              src={LeftG}
              //extras
            />
          </Grid>
        </Grid>
        <Grid item xs={1} md={1} className={classes.pot}>
          <img
            alt=''
            src='https://static.overlay-tech.com/assets/7d5b5d14-5edc-46f6-9d21-8b4e8602f07c.png'
            //flower pot
          />
        </Grid>
        <Grid item xs={1} md={4}>
          <img
            alt=''
            src={RightG}
            //big orange
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Index
