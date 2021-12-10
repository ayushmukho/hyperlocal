import { Card, CardMedia } from "@material-ui/core";
import { useState } from "react";
import v1 from "./images/v1.png";
import useStyles from "./styles";

import {
  CarouselProvider,
  Slider,
  Slide,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
const Simple = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.carousel}>
        {window.screen.width > 400 ? (
          <CarouselProvider
            naturalSlideWidth={3}
            naturalSlideHeight={3}
            totalSlides={10}
            visibleSlides={4}
            className={classes.carousel1}
          >
            <Slider>
              <Slide index={0}>
                <div style={{ height: 300, margin: 10 }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={v1}
                      alt="img"
                    />
                  </Card>
                </div>
              </Slide>
              <Slide index={1}>
                <div style={{ height: 300, margin: 10 }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={v1}
                      alt="img"
                    />
                  </Card>
                </div>
              </Slide>
              <Slide index={2}>
                <div style={{ height: 300, margin: 10 }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={v1}
                      alt="img"
                    />
                  </Card>
                </div>
              </Slide>
              <Slide index={3}>
                <div style={{ height: 300, margin: 10 }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={v1}
                      alt="img"
                    />
                  </Card>
                </div>
              </Slide>
              <Slide index={4}>
                <div style={{ height: 300, margin: 10 }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={v1}
                      alt="img"
                    />
                  </Card>
                </div>
              </Slide>
            </Slider>
          </CarouselProvider>
        ) : (
          <CarouselProvider
            naturalSlideWidth={3}
            naturalSlideHeight={3}
            totalSlides={10}
            visibleSlides={1}
          >
            <Slider>
              <Slide index={0}>
                <div style={{ height: 300, margin: 10 }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={v1}
                      alt="img"
                    />
                  </Card>
                </div>
              </Slide>
              <Slide index={1}>
                <div style={{ height: 300, margin: 10 }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={v1}
                      alt="img"
                    />
                  </Card>
                </div>
              </Slide>
              <Slide index={2}>
                <div style={{ height: 300, margin: 10 }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={v1}
                      alt="img"
                    />
                  </Card>
                </div>
              </Slide>
              <Slide index={3}>
                <div style={{ height: 300, margin: 10 }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={v1}
                      alt="img"
                    />
                  </Card>
                </div>
              </Slide>
              <Slide index={4}>
                <div style={{ height: 300, margin: 10 }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={v1}
                      alt="img"
                    />
                  </Card>
                </div>
              </Slide>
            </Slider>
          </CarouselProvider>
        )}
      </div>
    </div>
  );
};

export default Simple;
