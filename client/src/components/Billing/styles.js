import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: 475,
    },
  },

  nested: {
    paddingLeft: theme.spacing(4),
  },

  cb: {
    marginBottom: '10px',
    marginLeft: '10px',
  },

  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    margin: 'auto',
    width: 550,
    marginBottom: '50px',
    marginTop: '50px',
    backgroundColor: '#fcfcfc',
  },

  paper2: {
    padding: theme.spacing(2),
    display: 'flex',
    margin: 'auto',
    width: 500,
    marginBottom: '50px',
    marginTop: '50px',
    backgroundColor: '#fcfcfc',
  },
}))