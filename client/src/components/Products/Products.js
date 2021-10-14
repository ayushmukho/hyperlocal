import React from "react";
import {
  Container,
  Grid,
  Typography,
  Slider,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import Product from "./Product/Product";
import useStyles from "./styles";
import Navbar from "../LandingPage/Navbar/Navbar";

function valuetext(value) {
  return `${value}°C`;
}

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Products = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState([0, 10000]);
  const [state, setState] = React.useState({
    checkedHighToLow: true,
    checkedLowToHigh: true,
  });

  const handleChangeCheckBox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Grid
        container
        justify="space-between"
        alignItems="stretch"
        spacing={3}
        className={classes.container}
      >
        <Grid item sm={2}>
          <Typography gutterBottom>FILTERS</Typography>
          <Typography gutterBottom>Price</Typography>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            min={0}
            max={10000}
          />
          <Typography>SORT BY</Typography>
          <FormGroup row>
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.checkedHighToLow}
                  onChange={handleChangeCheckBox}
                  name="checkedHighToLow"
                />
              }
              label="Price-High to Low"
            />
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.checkedLowToHigh}
                  onChange={handleChangeCheckBox}
                  name="checkedLowToHigh"
                />
              }
              label="Price-Low to High"
            />
          </FormGroup>
        </Grid>
        <Grid item sm={10} xs={12} className={classes.container}>
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
