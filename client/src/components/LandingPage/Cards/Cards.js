import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles({
  card: {
    maxWidth: 280,
    top: '50%',
    left: '50%',
    borderRadius: 10,
    transform: 'translate(48%, 50%)',
    position: 'static',
    backgroundSize: '200%',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    transition: '1s',
    backgroundImage: 'linear-gradient(45deg, #FFC312, #EE5A24, #7417a3)',
    '&:hover': {
      backgroundPosition: 'right',
    },
    marginBottom: '40px',
    marginRight: '80px',
    justifyContent: 'space-around',
    cursor: 'pointer',
  },

  cc: {
    display: 'inline-block',
  },
})

export default function Cards() {
  const classes = useStyles()

  const Default = () => (
    <>
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          Default
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
    </>
  )

  const Redirect = () => (
    <>
      <Link href='/signup' className='btn btn-primary'>
        Sign up
      </Link>
    </>
  )

  const [component, setComponent] = useState(<Default />)

  const handleClick = (c) => {
    switch (c) {
      case 'Redirect':
        setComponent(<Redirect />)
        break
      default:
        break
    }
  }

  return (
    <div className={classes.cc}>
      <Card className={classes.card} onClick={() => handleClick('Redirect')} >
        {component}
      </Card>
    </div>
  )
}
