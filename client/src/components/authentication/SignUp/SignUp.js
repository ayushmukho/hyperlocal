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
  Link,
} from "@material-ui/core";

import { Visibility, VisibilityOff } from "@material-ui/icons";

import useStyles from "./styles";

import sally from "../../../images/sally.png";
import logo from "../../../images/logo.png";
import ellipse from "../../../images/ellipse.png";

const SignUp = () => {
  const classes = useStyles();
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <Container className={classes.toplevel1}>
      <Grid container className={classes.toplevel2}>
        <Grid item md={5} className={classes.sublevel1}>
          <div class="photo" className={classes.hide}>
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
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                px: 4,
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
                <InputLabel htmlFor="adornment-password">Password</InputLabel>
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
                  <Link href="#" variant="body2">
                    {"Already have an account?"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
