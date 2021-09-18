import * as React from "react";

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
  const [values, setValues] = React.useState({
    password: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container className={classes.toplevel1}>
      <Grid container className={classes.toplevel2}>
        <Grid item xs={5} className={classes.sublevel1}>
          <div class="photo">
            <img alt="logo" className={classes.logo} src={logo} />

            <Typography className={classes.text}>
              Find all types of everyday items at your arms reach{" "}
            </Typography>

            <img className={classes.sally} alt="sally" src={sally} />
            <img className={classes.ellipse} alt="ellipse" src={ellipse} />
          </div>
        </Grid>

        <Grid item xs={7} className={classes.sublevel2}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Create Account
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="fullname"
                label="Full Name"
                variant="standard"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                variant="standard"
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
                  type={values.showPassword ? "text" : "password"}
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
                        {values.showPassword ? (
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
                type="submit"
                color="primary"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create Account
              </Button>
              <Grid container>
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
