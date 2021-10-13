import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'
import useStyles from './styles'
import CardMedia from '@material-ui/core/CardMedia'

export default function SellerCard(props) {
  const classes = useStyles()

  const Default = () => (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={props.img} />

      <CardContent className={classes.content}>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  )

  const component = <Default />

  const history = useHistory()
  const navigateTo = () => history.push(`/sellers/${props.name}`)

  return (
    <div className={classes.cc}>
      <Card className={classes.card} onClick={navigateTo}>
        {component}
      </Card>
    </div>
  )
}
