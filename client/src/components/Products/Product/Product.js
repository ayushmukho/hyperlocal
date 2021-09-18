import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import React from "react";
import useStyles from "./styles";

const Product = () => {
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
            HEADING OF ITEM
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            description of the item
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
        </CardContent>
      </Card>
    </div>
  );
};

export default Product;
