import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Slider,
  Checkbox,
  FormControlLabel,
  FormGroup,
  CircularProgress,
  TextField,
  Button,
  Box,
  InputBase,
  IconButton,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import Product from "./Product/Product";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import Navbar from "../LandingPage/Navbar/Navbar";
import { getProductsByCategory } from "../../actions/products";
import ProductImage from "../../images/ProductImage";
import Star from "../../images/star";
import { Search } from "@material-ui/icons";

const GreenCheckbox = withStyles({
  root: {
    color: "#FE8400",
    "&$checked": {
      color: "#FE8400",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const PrettoSlider = withStyles({
  root: {
    color: "#FE8400",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const Products = () => {
  const classes = useStyles();
  const { cat } = useParams();
  const [textInputMin, setTextInputMin] = useState(0);
  const [textInputMax, setTextInputMax] = useState(10000);
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState("")

  const categoriesData = useSelector((state) => state.getAllCategories);
  const productData = useSelector((state) => state.getAllProductsByCategory);
  const { isLoading, products } = productData;
  const dispatch = useDispatch();
  const [value, setValue] = useState([textInputMin, textInputMax]);

  const handleChangeSlider = (event, newValue) => {
    setValue(newValue);
  };

  const [state, setState] = useState({
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
  });

  const [sort, setSort] = useState({
    asc: false,
    dsc: false,
  });

  const handleSearch = () => {
    setSearchItem(search);
  };

  const handleTextInputChangeMin = (event) => {
    setTextInputMin(event.target.value);
  };

  const handleTextInputChangeMax = (event) => {
    setTextInputMax(event.target.value);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handelSortChange = (event) => {
    setSort({ ...sort, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    dispatch(getProductsByCategory(cat));
  }, [cat, dispatch]);

  return (
    <Container maxWidth="xl">
      <Navbar />
      <Typography className={classes.title}>Electronics</Typography>
      <div className={classes.searchBox}>
        <InputBase
          onChange={(event) => {
            //adding the onChange event
            setSearch(event.target.value);
          }}
          style={{ marginLeft: "10px", width: "37vw" }}
          placeholder="Search for what you are looking for..."
        />
        <IconButton onClick={handleSearch} aria-label="search">
          <Search />
        </IconButton>
      </div>
      <div style={{ display: "flex" }}>
        <Box className={classes.heroBox}>
          <FormGroup row>
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.asc}
                  onChange={handelSortChange}
                  name="asc"
                />
              }
              label={
                <Typography style={{ fontSize: "12px" }}>
                  Sort in Asc
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.dsc}
                  onChange={handelSortChange}
                  name="dsc"
                />
              }
              label={
                <Typography style={{ fontSize: "12px" }}>
                  Sort in Dsc
                </Typography>
              }
            />
          </FormGroup>
        </Box>
      </div>
      <Grid
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={2}
        className={classes.container}
      >
        <Grid item sm={2} className={classes.hide}>
          <ProductImage />
          <div className={classes.univ}>
            <Typography gutterBottom className={classes.categories}>
              Categories
            </Typography>
            {!categoriesData.isLoading &&
              categoriesData.categories.map((category, i) => (
                <div
                  style={{ justifyContent: "space-between", display: "flex" }}
                >
                  <div>
                    <Typography gutterBottom style={{ fontSize: "14px" }}>
                      {category.name}
                    </Typography>
                  </div>

                  <Typography
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#FE8400",
                    }}
                  >
                    320
                  </Typography>
                </div>
              ))}
          </div>
          <div className={classes.univ}>
            <Typography gutterBottom className={classes.categories}>
              Rating
            </Typography>
            <FormGroup row>
              <FormControlLabel
                control={
                  <GreenCheckbox
                    checked={state.checked5}
                    onChange={handleChange}
                    name="checked5"
                  />
                }
                label={
                  <>
                    <Star /> <Star /> <Star /> <Star /> <Star />
                  </>
                }
              />
            </FormGroup>
            <FormGroup row>
              <FormControlLabel
                control={
                  <GreenCheckbox
                    checked={state.checked4}
                    onChange={handleChange}
                    name="checked4"
                  />
                }
                label={
                  <>
                    <Star /> <Star /> <Star /> <Star />{" "}
                  </>
                }
              />
            </FormGroup>
            <FormGroup row>
              <FormControlLabel
                control={
                  <GreenCheckbox
                    checked={state.checked3}
                    onChange={handleChange}
                    name="checked3"
                  />
                }
                label={
                  <>
                    <Star /> <Star /> <Star />
                  </>
                }
              />
            </FormGroup>
            <FormGroup row>
              <FormControlLabel
                control={
                  <GreenCheckbox
                    checked={state.checked2}
                    onChange={handleChange}
                    name="checked2"
                  />
                }
                label={
                  <>
                    <Star /> <Star />
                  </>
                }
              />
            </FormGroup>
            <FormGroup row>
              <FormControlLabel
                control={
                  <GreenCheckbox
                    checked={state.checked1}
                    onChange={handleChange}
                    name="checked1"
                  />
                }
                label={
                  <>
                    <Star />
                  </>
                }
              />
            </FormGroup>
          </div>
          <div className={classes.univ}>
            <Typography gutterBottom className={classes.categories}>
              Price
            </Typography>
            <PrettoSlider
              value={value}
              onChange={handleChangeSlider}
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={20}
              min={0}
              max={10000}
            />
            <div style={{ justifyContent: "space-between", display: "flex" }}>
              <div>
                <Typography
                  gutterBottom
                  style={{ fontSize: "14px", fontWeight: 600 }}
                >
                  Min
                </Typography>
                <TextField
                  id="outlined-secondary"
                  size="small"
                  variant="outlined"
                  color="#FE8400"
                  style={{ width: "79px" }}
                  onChange={handleTextInputChangeMin}
                />
              </div>
              <div>
                <Typography
                  gutterBottom
                  style={{ fontSize: "14px", fontWeight: 600 }}
                >
                  Max
                </Typography>
                <TextField
                  id="outlined-secondary"
                  size="small"
                  variant="outlined"
                  color="#FE8400"
                  style={{ width: "79px" }}
                  onChange={handleTextInputChangeMax}
                />
              </div>
            </div>
          </div>
          <div className={classes.univ}>
            <div style={{ justifyContent: "space-between", display: "flex" }}>
              <Button className={classes.button} variant="contained">
                Apply
              </Button>
              <Button className={classes.button2} variant="contained">
                Reset
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item sm={10} xs={12} className={classes.container}>
          <Grid
            container
            alignItems="stretch"
            spacing={3}
            style={{ marginLeft: "70px" }}
          >
            {isLoading ? (
              <CircularProgress />
            ) : (
              products.filter((val) => {
                if(search === ""){
                  return val
                }else if(val.name.toLowerCase().includes(searchItem.toLowerCase())){
                  return val
                }
              }).map((product, i) => (
                <Grid item xs={12} sm={12} md={6} lg={4} key={i}>
                  <Product key={i} product={product} />
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
