import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: (props) => `0px 5px 1px 1px ${props.color}`,
    marginBottom: '40px',
    cursor: 'pointer',
    minWidth: 220,
    [theme.breakpoints.down('md')]: {
      minWidth: 250,
    },
    '&:hover': {
      backgroundColor: (props) => `0px 5px 1px 1px ${props.color}`,
      transform: 'scale(1.05)',
      color: 'black',
      transitionProperty: 'transform, backgroundColor',
      transitionDuration: '1s',
    },
    backgroundColor: (props) => props.color,
    maxHeight: '70px',
    borderRadius: '20px',
    paddingBottom: '100px',
    maxWidth: '200px',
    marginLeft: '50px',
    filter: `drop-shadow(0 0 0.25rem #ebc3ea)`,
  },

  header: {
    marginleft: '00px',
  },
}))

export default function Cards(props) {
  const classes = useStyles(props)
  const Default = () => (
    <CardContent>
      <Typography
        gutterBottom
        variant='h5'
        component='h2'
        className={classes.header}
      >
        {props.name}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
        {props.description}
      </Typography>
    </CardContent>
  )

  const component = <Default />

  const history = useHistory()
  const navigateTo = () => history.push(`/categories/${props.id}`)

  return (
    <div>
      <Card onClick={navigateTo} className={classes.card}>
        {component}
      </Card>
    </div>
  )
}
