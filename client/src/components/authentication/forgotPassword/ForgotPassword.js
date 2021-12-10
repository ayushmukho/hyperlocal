import React from "react";
import {
  Grid,
  Typography,
  Box,
  Container,
  TextField,
  Button,
} from "@material-ui/core";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import useStyles from "./styles";
import sally from "../../../images/sally.png";
import logo from "../../../images/logo.png";
import ellipse from "../../../images/ellipse.png";

import * as api from "../../../api/index";

import * as Yup from "yup";
import { useFormik } from "formik";

import { useHistory, useParams } from "react-router";

const ForgotPassword = () => {
  const classes = useStyles();
  const history = useHistory();
  const token = useParams();
  const validate = Yup.object({
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      try {
        const res = await api.confirmPassword(token.id, values.password);

        if (res.status === 200) {
          toast("Password change successful");
          history.push("/");
        }
      } catch (error) {
        toast(error.response.data.message);
      }
    },
  });

  return (
    <>
      <Container className={classes.toplevel1}>
        <Grid container className={classes.toplevel2}>
          <Grid item md={5} className={classes.sublevel1}>
            <div className={classes.hide}>
              <img alt="logo" className={classes.logo} src={logo} />

              <Typography className={classes.text}>
                Please reset your password{" "}
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
                Change Password
              </Typography>
              <form onSubmit={formik.handleSubmit}>
                <Box
                  sx={{
                    px: 5,
                    mt: 3,
                  }}
                >
                  <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />

                  <TextField
                    fullWidth
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    type=""
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.confirmPassword &&
                      Boolean(formik.errors.confirmPassword)
                    }
                    helperText={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
                    className={classes.text1}
                  />

                  <Button
                    type="submit"
                    className={classes.submitButton}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Change Password
                  </Button>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ForgotPassword;
