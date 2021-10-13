import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";
import * as api from "../../api/index";

import Check from "../../images/check.js";
import Exclamation from "../../images/exclamation.js";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    width: 460,
    padding: "10px",
    margin: "auto",
    borderRadius: 10,
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title1: {
    display: "flex",
    fontSize: 24,
    justifyContent: "center",
    marginTop: "2px",
    alignItems: "center",
  },
  desc: {
    padding: "0 40px",
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
});

const Activation = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const classes = useStyles();

  const activation = async (id) => {
    try {
      const response = await api.activation(id);
      setIsError(false);
      setMessage(response.data.message);
    } catch (error) {
      setIsError(true);
      setMessage(error.response.data.message);
    }
  };

  useEffect(() => {
    activation(id);
  }, [id]);

  return (
    <Container className={classes.container}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {!isError ? <Check /> : <Exclamation />}
          </Typography>
          <Typography className={classes.title1} color="textSecondary">
            {!isError ? "Thank You!" : "Oops!"}
          </Typography>
        </CardContent>
        <CardContent className={classes.title}>
          <Typography className={classes.desc} color="textSecondary">
            {message}
          </Typography>
        </CardContent>
        <CardActions className={classes.title}>
          {!isError ? (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  borderRadius: 25,
                  backgroundColor: "#Fe8400",
                  padding: "8px 16px",
                  fontSize: "12px",
                }}
                variant="contained"
              >
                Sign In
              </Button>
            </Link>
          ) : (
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  borderRadius: 25,
                  backgroundColor: "#Fe8400",
                  padding: "8px 16px",
                  fontSize: "12px",
                }}
                variant="contained"
              >
                Sign Up
              </Button>
            </Link>
          )}
        </CardActions>
      </Card>
    </Container>
  );
};

export default Activation;
