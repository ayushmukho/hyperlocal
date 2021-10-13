import React from "react";
import { Container, Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

const Products = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid
        container
        justify="space-between"
        alignItems="stretch"
        spacing={3}
        className={classes.container}
      >
        <Grid item sm={3}>
          randi randi randi
        </Grid>
        <Grid item sm={9} xs={12} className={classes.container}>
          <Grid container alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Product />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Product />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Product />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Product />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
