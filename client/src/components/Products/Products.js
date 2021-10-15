import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Slider,
  Checkbox,
  FormControlLabel,
  FormGroup,
  CircularProgress,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { useDispatch } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import Product from "./Product/Product";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import Navbar from "../LandingPage/Navbar/Navbar";
import { getProductsByCategory } from "../../actions/products";

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
  const { cat } = useParams();
  const dispatch = useDispatch();

  const [value, setValue] = React.useState([0, 10000]);
  const [state, setState] = React.useState({
    checkedHighToLow: false,
    checkedLowToHigh: false,
  });

  useEffect(() => {
    dispatch(getProductsByCategory(cat));
  }, [cat, dispatch]);

  const productData = useSelector((state) => state.getAllProductsByCategory);

  const { isLoading, products } = productData;

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
        justifyContent="space-between"
        alignItems="stretch"
        spacing={3}
        className={classes.container}
      >
        <Grid
          item
          sm={2}
          style={{
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
            height: "500px",
          }}
        >
          <Typography gutterBottom className={classes.filters}>
            FILTERS
          </Typography>
          <Typography gutterBottom className={classes.price}>
            Price
          </Typography>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            className={classes.priceSlider}
            min={0}
            max={10000}
          />
          <Typography gutterBottom className={classes.price}>
            Sort By
          </Typography>
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
          <Grid
            container
            alignItems="stretch"
            spacing={4}
            style={{ marginLeft: "20px" }}
          >
            {isLoading ? (
              <CircularProgress />
            ) : (
              products.map((product, i) => (
                <Grid item xs={12} sm={12} md={6} lg={4} key={i}>
                  <Product product={product} />
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
