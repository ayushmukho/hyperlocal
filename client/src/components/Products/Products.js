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
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { Search, Clear } from "@material-ui/icons";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { useDispatch } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import useStyles from "./styles";

import Product from "./Product/Product";
import Navbar from "../LandingPage/Navbar/Navbar";
import { getProductsByCategory } from "../../actions/products";

import { ReactComponent as Saly } from "../../images/Group 83.svg";
import Star from "../../images/star";
import NoPro from "../../images/noPro.gif";

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

const OrangeRadio = withStyles({
  root: {
    color: "#FE8400",
    "&$checked": {
      color: "#FE8400",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const Products = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  const { cat } = useParams();

  const categoriesData = useSelector((state) => state.getAllCategories);
  const productData = useSelector((state) => state.getAllProductsByCategory);

  const { isLoading, products } = productData;

  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("");
  const [category, setCategory] = useState({});
  const [output, setOutput] = useState([]);
  const [sliderValue, setSliderValue] = useState([0, 10000]);
  const [rating, setRating] = useState({
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
  });

  const handleSorting = (sortEvent) => {
    if (sortEvent === "asc") {
      setOutput(priceFilterAsc(output));
    } else if (sortEvent === "dsc") {
      setOutput(priceFilterDsc(output));
    }
  };

  const handleChangeSlider = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleSearch = () => {
    setSearch(search);
  };

  const handleClear = () => {
    setSearch("");
  };

  const handleTextInputChangeMin = (event) => {
    let newArr = [...sliderValue];
    newArr[0] = event.target.value;
    setSliderValue(newArr);
  };

  const handleTextInputChangeMax = (event) => {
    let newArr = [...sliderValue];
    newArr[1] = event.target.value;
    setSliderValue(newArr);
  };

  const handleRatingChange = (event) => {
    setRating({ ...rating, [event.target.name]: event.target.checked });
  };

  const priceFilterAsc = (val) => {
    return val.sort((a, b) => {
      const aPrice = a.price;
      const bPrice = b.price;
      return aPrice - bPrice;
    });
  };

  const priceFilterDsc = (val) => {
    return val.sort((a, b) => {
      const aPrice = a.price;
      const bPrice = b.price;
      return bPrice - aPrice;
    });
  };

  const handleApplyFilters = () => {
    setOutput([]);
    // eslint-disable-next-line array-callback-return
    products.filter((val) => {
      if (val.price >= sliderValue[0] && val.price <= sliderValue[1]) {
        setOutput((output) => [...output, val]);
      }
    });
  };

  const handleRemoveFilters = () => {
    setRating({
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
    });
    setSliderValue([0, 10000]);
    setOutput(products);
  };

  useEffect(() => {
    dispatch(getProductsByCategory(cat));
    setCategory(
      categoriesData.categories.find((category) => category._id === cat)
    );
  }, [cat, categoriesData.categories, dispatch]);

  useEffect(() => {
    setOutput([]);
    setSorting("");
    // eslint-disable-next-line array-callback-return
    products.filter((val) => {
      if (search === "") {
        setOutput(products);
      } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
        setOutput((output) => [...output, val]);
      }
    });
  }, [products, search]);

  return (
    <>
      <Box
        style={{
          backgroundImage: `url(${category?.coverImage})`,
          paddingBottom: "20px",
          marginBottom: "20px",
        }}
      >
        <Navbar />
        <Typography className={classes.title}>{category?.name}</Typography>

        <div className={classes.searchBox}>
          <Autocomplete
            id="combo-box-demo"
            options={categoriesData.categories}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            onChange={(e, newValue) =>
              newValue ? history.push(`/categories/${newValue?._id}`) : null
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Categories"
                variant="outlined"
                style={{
                  backgroundColor: "#F9F9F9",
                  borderRadius: "3px",
                }}
              />
            )}
          />
          <InputBase
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            value={search}
            className={classes.inputBase}
            placeholder="Search for what you are looking for..."
          />
          <IconButton
            onClick={search === "" ? handleSearch : handleClear}
            aria-label="search"
            className={classes.iconButton}
          >
            {search === "" ? <Search /> : <Clear />}
          </IconButton>
        </div>
      </Box>
      <Container maxWidth="xl">
        <div style={{ display: "flex" }}>
          <Box className={classes.heroBox}>
            <FormGroup row>
              <RadioGroup
                aria-label="sorting"
                row
                name="sort1"
                value={sorting}
                onChange={(e) => {
                  setSorting(e.target.value);
                  handleSorting(e.target.value);
                }}
              >
                <FormControlLabel
                  value="asc"
                  control={<OrangeRadio />}
                  label={
                    <Typography style={{ fontSize: "12px" }}>
                      Sort in Asc
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="dsc"
                  control={<OrangeRadio />}
                  label={
                    <Typography style={{ fontSize: "12px" }}>
                      Sort in Dsc
                    </Typography>
                  }
                />
              </RadioGroup>
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
            {/* <ProductImage /> */}
            <Saly />
            <div className={classes.univ}>
              <Typography gutterBottom className={classes.categories}>
                Categories
              </Typography>
              {!categoriesData.isLoading &&
                categoriesData.categories.map((category, i) => (
                  <div
                    style={{ justifyContent: "space-between", display: "flex" }}
                    key={i}
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
                      checked={rating.checked5}
                      onChange={handleRatingChange}
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
                      checked={rating.checked4}
                      onChange={handleRatingChange}
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
                      checked={rating.checked3}
                      onChange={handleRatingChange}
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
                      checked={rating.checked2}
                      onChange={handleRatingChange}
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
                      checked={rating.checked1}
                      onChange={handleRatingChange}
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
                value={sliderValue}
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
                    value={sliderValue[0]}
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
                    value={sliderValue[1]}
                    style={{ width: "79px" }}
                    onChange={handleTextInputChangeMax}
                  />
                </div>
              </div>
            </div>
            <div className={classes.univ}>
              <div style={{ justifyContent: "space-between", display: "flex" }}>
                <Button
                  onClick={handleApplyFilters}
                  className={classes.button}
                  variant="contained"
                >
                  Apply
                </Button>
                <Button
                  onClick={handleRemoveFilters}
                  className={classes.button2}
                  variant="contained"
                >
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
              ) : output.length === 0 ? (
                // eslint-disable-next-line jsx-a11y/alt-text
                <img src={NoPro} className={classes.gifProduct} />
              ) : (
                output.map((product, i) => (
                  <Grid item xs={12} sm={12} md={6} lg={4} key={i}>
                    <Product key={i} product={product} />
                  </Grid>
                ))
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Products;
