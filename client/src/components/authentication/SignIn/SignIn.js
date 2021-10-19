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
  Modal,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";

import "react-toastify/dist/ReactToastify.css";

import { useHistory } from "react-router-dom";

import { Visibility, VisibilityOff } from "@material-ui/icons";

import useStyles from "./styles";

import sally from "../../../images/sally.png";
import logo from "../../../images/logo.png";
import ellipse from "../../../images/ellipse.png";

import { googleLogin, login } from "../../../actions/auth";
import { toast } from "react-toastify";
import gb from "../../../images/google.png";
import { forgotPassword as fp } from "../../../api";

const SignIn = ({ openSignIn, closeSignIn }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [forgotEmail, setforgotEmail] = useState("");
  const [values, setValues] = useState({
    password: "",
    email: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleEmailChange = (e) => {
    setforgotEmail(e.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(login(values, history));
  };

  const googleSuccess = async (res) => {
    const token = res.tokenId;
    try {
      dispatch(googleLogin(token, history));
    } catch (error) {
      toast(error.response.data.message);
    }
  };

  const googleError = () =>
    toast("Google Sign In was unsuccessful. Try again later");

  const forgotPassword = (e) => {
    e.preventDefault();
    setForgot(true);
  };

  const sendData = async (e) => {
    e.preventDefault();

    try {
      const res = await fp(forgotEmail);
      if (res.status === 200) {
        toast("Please check your email for reset link");
        setForgot(false);
      }
    } catch (error) {
      toast(error.response.data.message);
    }
  };

  return !forgot ? (
    <>
      <Modal open={openSignIn} onClose={closeSignIn} className={classes.modal}>
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
                  Login
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
                    Login
                  </Button>

                  <Button className={classes.forgot} onClick={forgotPassword}>
                    Forgot Password ?
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Modal>
    </>
  ) : (
    <>
      <Modal open={openSignIn} onClose={closeSignIn} className={classes.modal}>
        <Container className={classes.toplevel1}>
          <Grid container className={classes.toplevel2}>
            <Grid item md={5} className={classes.sublevel1}>
              <div className={classes.hide}>
                <img alt="logo" className={classes.logo} src={logo} />

                <Typography className={classes.text1}>
                  Did you forget something important ? 
                  Don't worry we are always there to help you.
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
                  Forgot Password ?
                </Typography>
                <Box
                  component="form"
                  noValidate
                  sx={{
                    px: 5,
                    mt: 3,
                  }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    variant="standard"
                    value={forgotEmail}
                    onChange={handleEmailChange}
                  />

                  <Button
                    type="submit"
                    className={classes.submitButton}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={sendData}
                  >
                    Submit
                  </Button>
                  <Button
                    className={classes.forgot}
                    onClick={() => {
                      setForgot(false);
                    }}
                  >
                    Go back to login
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Modal>
    </>
  );
};

export default SignIn;
