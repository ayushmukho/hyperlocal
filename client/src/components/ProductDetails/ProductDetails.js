import {
  Box,
  Button,
  Card,
  CardMedia,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Tab,
  Tabs,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Navbar from "../LandingPage/Navbar/Navbar";
import useStyles from "./styles";
import { getSingleProduct } from "../../actions/product";
import { getProductsByCategory } from "../../actions/products";
import bigImg from "./images/big.png";
import v1 from "./images/v1.png";
import v2 from "./images/v2.png";
import v3 from "./images/frontbackview.png";
import StarRatings from "react-star-ratings";
import { addToCart } from "../../api";
import {
  Favorite,
  FavoriteBorder,
  FavoriteBorderOutlined,
} from "@material-ui/icons";

function ProductDetails() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { prodid, catId } = useParams();
  const [category, setCategory] = useState({});
  const [singleProductDetails, setProductDetails] = useState({});

  const categoriesData = useSelector((state) => state.getAllCategories);
  const productDetails = useSelector((state) => state.singleProductReducer);

  useEffect(() => {
    dispatch(getSingleProduct(prodid));
    dispatch(getProductsByCategory(catId));
  }, [dispatch]);

  useEffect(() => {
    setCategory(
      categoriesData.categories.find((category) => category._id === catId)
    );
    setProductDetails(productDetails.products);
    console.log("assa", singleProductDetails);
    console.log(singleProductDetails.image);
    console.log("catt", category);
  }, [catId, categoriesData.categories]);

  return (
    <div>
      <Navbar />
      
      {/* Category Name Section */}

      <div className={classes.nameDiv}>
        <h1 className={classes.CategoryName}>{category.name}</h1>
        <div className={classes.buttonGrp}>
          <Button className={classes.btn}>Home.</Button>
          <Button className={classes.btn}>Pages.</Button>
          <Button className={classes.btn}>Product Details</Button>
        </div>
      </div>
      
      {/* Detail Section */}

      <Box className={classes.outerBox}>
        <div className={classes.DetailSection}>
          <div className={classes.Photos}>
            <div className={classes.smallPhotosdiv}>
              <div className={classes.smallPhotos}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia component="img" height="90" image={v1} alt="img" />
                </Card>
              </div>
              <div className={classes.smallPhotos2}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia component="img" height="90" image={v2} alt="img" />
                </Card>
              </div>
              <div className={classes.smallPhotos}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia component="img" height="90" image={v3} alt="img" />
                </Card>
              </div>
            </div>
            <div className={classes.largePhotos}>
              <Card className={classes.largePhotos1} sx={{ maxWidth: 350 }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={bigImg}
                  alt="img"
                />
              </Card>
            </div>
          </div>
          <div className={classes.details}>
            <h3>{singleProductDetails.name}</h3>
            <div className={classes.rating}>
              <StarRatings
                rating={singleProductDetails.rating}
                starDimension="10px"
                starSpacing="2px"
                starRatedColor="#FFC416"
              />
              <p className={classes.numReviews}>
                ({singleProductDetails.numReviews})
              </p>
            </div>

            <span className={classes.price}>${singleProductDetails.price}</span>

            <p className={classes.description}>
              {singleProductDetails.description}
            </p>
            <div className={classes.buttonDiv}>
              <Button size="small" className={classes.add}>
                Add To Cart
              </Button>
              <Checkbox
                className={classes.heart}
                icon={<FavoriteBorderOutlined />}
                checkedIcon={<Favorite />}
              />
            </div>
          </div>
        </div>
      </Box>

      {/* Additional Details Section */}

      <div className={classes.AdditionalDetails}>

       
      </div>


    </div>
  );
}

export default ProductDetails;
