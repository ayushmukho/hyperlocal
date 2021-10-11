import React from 'react'
import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../../images/logo.png'
import { useState } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import {
  Grid,
  Typography,
  Box,
  Container,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
} from '@material-ui/core'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import gb from '../../../images/google.png'
import Avatar from '@material-ui/core/Avatar'

import 'react-toastify/dist/ReactToastify.css'

import { useHistory } from 'react-router-dom'

import { Visibility, VisibilityOff } from '@material-ui/icons'

import useStyles from './styles'

import sally from '../../../images/sally.png'
import ellipse from '../../../images/ellipse.png'
import * as api from '../../../api/index'
import { googleLogin } from '../../../actions/auth'
import Modal from '@material-ui/core/Modal'
import { LOGOUT } from '../../../constants/actionTypes'

const Nav = styled.nav`
  background: none;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`

const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: black;
  `

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Navbar = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)
  const [values, setValues] = useState({
    password: '',
    email: '',
    username: '',
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await api.signup(values)
      toast(data.message)
    } catch (error) {
      toast(error.response.data.message)
    }
  }

  const googleSuccess = async (res) => {
    const token = res.tokenId
    try {
      dispatch(googleLogin(token, history))
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const googleError = () =>
    toast('Google Sign In was unsuccessful. Try again later')

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
    console.log('btnitnfsjdnvj')
  }

  const handleClose = () => {
    setOpen(false)
  }
  const sellersData = useSelector((state) => state.user)
  const { isLoading, authData } = sellersData

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    dispatch({ type: LOGOUT })
    setAnchorEl(null)
  }

  return (
    <>
      <Nav position='static'>
        <NavLink to='/' className={classes.logo_name}>
          <h1><span className='font-link'>Trevio</span></h1>
          <img src={logo} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/services'>
            Services
          </NavLink>
          <NavLink to='/contact-us'>
            Contact Us
          </NavLink>
        </NavMenu>
        {!isLoading ? (
          <div className={classes.flex}>
            <h3>{authData.username}</h3>
            <Avatar src={authData.avatar} onClick={handleClick} />
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              {authData.isSeller ? (
                <MenuItem onClick={handleClose}>My Products</MenuItem>
              ) : (
                <MenuItem onClick={handleClose}>Be a Seller</MenuItem>
              )}
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <>
            <Button onClick={handleOpen} className={classes.but} >
              Sign in
            </Button>
            <Modal open={open} onClose={handleClose} className={classes.modal}>
              <Container className={classes.toplevel1}>
                <Grid container className={classes.toplevel2}>
                  <Grid item md={5} className={classes.sublevel1}>
                    <div className={classes.hide}>
                      <img alt='logo' className={classes.logo} src={logo} />

                      <Typography className={classes.text}>
                        Find all types of everyday items at your arms reach{' '}
                      </Typography>

                      <img className={classes.sally} alt='sally' src={sally} />
                      <img
                        className={classes.ellipse}
                        alt='ellipse'
                        src={ellipse}
                      />
                    </div>
                  </Grid>

                  <Grid item xs={12} md={7} className={classes.sublevel2}>
                    <Box className={classes.boxExpand}>
                      <Typography
                        component='h1'
                        variant='h5'
                        style={{ fontSize: '36px', fontWeight: 700 }}
                      >
                        Create Account
                      </Typography>
                      <GoogleLogin
                        clientId='390268815880-iesar9tq1omf7a47b3lhnrp5hf6bah1l.apps.googleusercontent.com'
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy='single_host_origin'
                        render={(renderProps) => (
                          <Button
                            className={classes.googleButton}
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            variant='contained'
                          >
                            <div>
                              <img
                                src={gb}
                                className={classes.googleImage}
                                alt='google'
                              />
                            </div>{' '}
                            <div>Google Sign In</div>
                          </Button>
                        )}
                      />
                      <Box
                        component='form'
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{
                          px: 5,
                          mt: 3,
                        }}
                      >
                        <TextField
                          margin='normal'
                          required
                          fullWidth
                          id='fullname'
                          label='Full Name'
                          variant='standard'
                          onChange={handleChange('username')}
                        />
                        <TextField
                          margin='normal'
                          required
                          fullWidth
                          id='email'
                          label='Email'
                          variant='standard'
                          onChange={handleChange('email')}
                        />

                        <FormControl
                          required
                          fullWidth
                          margin='normal'
                          variant='standard'
                        >
                          <InputLabel htmlFor='adornment-password'>
                            Password
                          </InputLabel>
                          <Input
                            id='adornment-password'
                            type={showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                              <InputAdornment position='end'>
                                <IconButton
                                  aria-label='toggle password visibility'
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge='end'
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>

                        <Button
                          type='submit'
                          className={classes.submitButton}
                          fullWidth
                          variant='contained'
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Create Account
                        </Button>
                        <Grid container style={{ marginTop: '10px' }}>
                          <Grid item>
                            <NavLink
                              to='/login'
                              style={{ textDecoration: 'none' }}
                            >
                              {'Already have an account?'}
                            </NavLink>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Modal>
          </>
        )}
        </Nav>
    </>
  )
}

export default Navbar
