import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    maxWidth: 220,
    maxHeight: 220,
    margin: 'auto',
    borderRadius: '30px 30px 20px 20px',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      filter: `drop-shadow(0 0 0.25rem #ebc3ea)`,
      transform: 'scale(1.05)',
      transitionDuration: '1s',
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '70px',
    },
  },
  media: {
    paddingTop: '65%',
    borderRadius: '30px',
  },
  content: {
    textAlign: 'center',
    padding: theme.spacing(3),
  },
  divider: {
    margin: `${theme.spacing(1)}px 0`,
  },
  heading: {
    fontWeight: 'bold',
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: 'inline-block',
    border: '2px solid white',
    '&:not(:first-of-type)': {
      marginLeft: -theme.spacing(1),
    },
  },
  mid: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}))
