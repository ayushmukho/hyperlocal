import React, { useState } from "react";
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
} from "@material-ui/core";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import gb from "../../../images/google.png";

import "react-toastify/dist/ReactToastify.css";

import { Link, useHistory } from "react-router-dom";

import { Visibility, VisibilityOff } from "@material-ui/icons";

import useStyles from "./styles";

import sally from "../../../images/sally.png";
import logo from "../../../images/logo.png";
import ellipse from "../../../images/ellipse.png";
import * as api from "../../../api/index";
import { googleLogin } from "../../../actions/auth";
import Modal from "@material-ui/core/Modal";

const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    password: "",
    email: "",
    username: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await api.signup(values);
      toast(data.message);
    } catch (error) {
      toast(error.response.data.message);
    }
  };

  const googleSuccess = async (res) => {
    const token = res.tokenId;
    try {
      dispatch(googleLogin(token, history));
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const googleError = () =>
    toast("Google Sign In was unsuccessful. Try again later");

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <Container className={classes.toplevel1}>
          <Grid container className={classes.toplevel2}>
            <Grid item md={5} className={classes.sublevel1}>
              <div className={classes.hide}>
                <img alt="logo" className={classes.logo} src={logo} />

                <Typography className={classes.text}>
                  Find all types of everyday items at your arms reach{" "}
                </Typography>

                <img className={classes.sally} alt="sally" src={sally} />
                <img className={classes.ellipse} alt="ellipse" src={ellipse} />
              </div>
            </Grid>

            <Grid item xs={12} md={7} className={classes.sublevel2}>
              <Box className={classes.boxExpand}>
                <Typography
                  component="h1"
                  variant="h5"
                  style={{ fontSize: "36px", fontWeight: 700 }}
                >
                  Create Account
                </Typography>
                <GoogleLogin
                  clientId="390268815880-iesar9tq1omf7a47b3lhnrp5hf6bah1l.apps.googleusercontent.com"
                  onSuccess={googleSuccess}
                  onFailure={googleError}
                  cookiePolicy="single_host_origin"
                  render={(renderProps) => (
                    <Button
                      className={classes.googleButton}
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      variant="contained"
                    >
                      <div>
                        <img
                          src={gb}
                          className={classes.googleImage}
                          alt="google"
                        />
                      </div>{" "}
                      <div>Google Sign In</div>
                    </Button>
                  )}
                />
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{
                    px: 5,
                    mt: 3,
                  }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="fullname"
                    label="Full Name"
                    variant="standard"
                    onChange={handleChange("username")}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    variant="standard"
                    onChange={handleChange("email")}
                  />

                  <FormControl
                    required
                    fullWidth
                    margin="normal"
                    variant="standard"
                  >
                    <InputLabel htmlFor="adornment-password">
                      Password
                    </InputLabel>
                    <Input
                      id="adornment-password"
                      type={showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    className={classes.submitButton}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Create Account
                  </Button>
                  <Grid container style={{ marginTop: "10px" }}>
                    <Grid item>
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        {"Already have an account?"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Modal>
    </>
  );
};

export default SignUp;
