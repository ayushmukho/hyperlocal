import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import React from "react";
import useStyles from "./styles";

const Product = ({ product }) => {
  console.log(product);
  const classes = useStyles();
  return (
    <div className="App">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
          }
        />

        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            {product.name}
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            {product.description.split(' ').splice(0, 15).join(' ')}...
          </Typography>
        </CardContent>
        <Divider className={classes.divider} light />
        <CardContent className={classes.mid}>
          <div>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </div>
          <Link href="/cart" style={{ textDecoration: "none", marginTop: "5px" }}>
            <Button
              style={{
                borderRadius: 25,
                backgroundColor: "#Fe8400",
                padding: "8px 16px",
                fontSize: "12px",
              }}
              variant="contained"
            >
              ADD TO CART
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Product;
