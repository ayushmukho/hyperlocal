import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
  modal: {
    width: "100vw",
    height: "100vh",
    overflow : "scroll",
  },

  toplevel1: {
    marginTop: "70px",
    display: "flex",

    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      marginTop: "10px",
      height: "90%",
      // paddingRight: "20px"
    },
  },

  hide: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  boxExpand: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 90,
    marginLeft: 70,
    marginRight: 70,
    padding: 34,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      padding: 4,
    },
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
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0px",
    },
    [theme.breakpoints.down("md")]: {
      position: "relative",
      height: "100%",
      paddingBottom: "30px",
      paddingTop:"0px",
      

      // paddingRight: "20px"
    },
  },

  text: {
    position: "relative",
    top: "110px",
    left: "18px",
    right: "32px",
    color: "#FFFFFF",
    fontSize: "32px",
    inlineHeight: "36px",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      paddingRight: "50px",
      color: "#FFFFFF",
      fontSize: "30px",
      inlineHeight: "36px",
    },
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
    top: "6px",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      left: "19.74%",
      right: "25.74%",
      top: "-24px",
      bottom: "0px",
      zIndex: 1,
      width: "500px",
    },
  },
  sally: {
    position: "relative",
    left: "170px",
    right: "0.8%",
    top: "79px",
    bottom: "9.1%",
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      position: "relative",

      left: "19.74%",
      right: "25.74%",
      top: "29px",
      bottom: "0px",
      width: "400px",
      zIndex: 1,
    },
  },
  submitButton: {
    borderRadius: 10,
    backgroundColor: "#Fe8400",
    padding: "8px 16px",
    fontSize: "15px",
    color: "white",
    fontWeight: 900,
    marginTop: "36px",
  },
  googleImage: {
    height: "30px",
    paddingTop: "5px",
    marginRight: "10px",
  },
  googleButton: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    height: "50px",
    marginTop: "20px",
  },
}));
