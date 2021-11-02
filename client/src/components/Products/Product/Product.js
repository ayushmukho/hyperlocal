import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import useStyles from "./styles";

const Product = ({ product }) => {
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
            {product.description.split(" ").splice(0, 10).join(" ")}...
          </Typography>
        </CardContent>
        <CardContent className={classes.mid}>
          <div>
            <Typography variant={"h6"}>{product.price} USD</Typography>
          </div>
          <Link
            href="/cart"
            style={{ textDecoration: "none", marginTop: "5px" }}
          >
            <Button className={classes.button} variant="contained">
              Add To Cart
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Product;
