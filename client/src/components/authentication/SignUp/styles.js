import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toplevel1: {
    marginTop: "10%",
    display: "flex",
    justifyContent: "center",
    height: "100%",
  },

  toplevel2: {
    borderRadius: "15px",
    backgroundColor: "#Fe8400",
    height: "100%",
    position: "relative",
  },

  sublevel1: {},
  sublevel2: {
    backgroundColor: "white",
    borderRadius: "30px 0px 0px  30px",
  },

  text: {
    position: "relative",
    top: "110px",
    left: "36px",
    right: "36px",
    color: "#FFFFFF",
    fontSize: "36px",
    inlineHeight: "36px",
  },

  logo: {
    position: "relative",
    width: "55px",
    height: "55px",
    left: "22px",
    top: "18px",
  },
  ellipse: {
    position: "relative",
    left: "25.74%",
    right: "25.74%",
    // top: "70px",
  },
  sally: {
    position: "relative",
    left: "170px",
    right: "0.8%",
    top: "79px",
    bottom: "9.1%",
    zIndex: 1,
  },
}));
