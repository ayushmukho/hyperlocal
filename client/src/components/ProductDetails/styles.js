import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  nameDiv: {
    paddingLeft: "23%",
    backgroundColor: "#F6F5FF",
    height: "160px",
    paddingTop: "50px",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {},
  },
  CategoryName: {
    marginBottom: "10px",
    fontFamily: "Josefin Sans",
  },
  btnGrp: {
    display: "flex",
    width: "100%",
  },
  btn: {
    fontSize: "10px",
    margin: "0px",
    padding: "0px",
    justifyContent: "left",
  },
  outerBox: {
    //  boxShadow:"5px 10px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height:"375px",
  },
  DetailSection: {
    display: "flex",
    marginTop: "50px",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    paddingLeft: "10px",
    paddingTop: "10px",
    width: "55%",
    fontFamily: "Josefin Sans",
    [theme.breakpoints.down("sm")]: {
      height: "800px",
      display: "flex",
      flexDirection: "column",
      width:"100%",
    },

    [theme.breakpoints.down("md")]: {
      height: "100%",
      display: "flex",
      flexDirection: "row",
      width: "200%",
      paddingLeft: "100px",
      paddingTop: "40px",
    },
  },
  Photos: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "25px",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "10px",
    },

    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "10px",
    },
  },
  smallPhotos: {
    marginBottom: "5px",
    paddingTop: "5px",
    width: "100px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: "15px",
    },
  },

  smallPhotos2: {
    marginBottom: "5px",
    paddingTop: "5px",
    width: "100px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginRight: "10px",
      marginLeft: "15px",
    },
  },

  smallPhotosdiv: {
    marginBottom: "5px",
    paddingTop: "5px",
    width: "100px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
    },
  },

  largePhotos: {
    marginLeft: "10px",
    paddingTop: "20px",
    paddingBottom: "10px",
    width: "270px",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      marginLeft: "30px",
    },
  },
  largePhotos1: {
    boxShadow: "0 0 0 0",
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px",
      marginTop: "10px",
    },
  },
  numReviews: {
    marginLeft: "10px",
    fontSize: "12px",
    paddingTop: "3px",
    fontFamily: "Josefin Sans",
  },
  price: {
    marginTop: "5px",
    fontSize: "13px",
    color: "#151875",
    fontFamily: "Josefin Sans",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
  description: {
    color: "#A9ACC6",
    fontFamily: "Josefin Sans",
    fontSize: "13px",
    paddingTop: "10px",
    width: "370px",
    paddingRight: "10px",
    fontFamily: "Josefin Sans",
    [theme.breakpoints.down("sm")]: {
      width: "350px",
      fontSize: "13px",
      color: "#A9ACC6",
    },
  },
  add: {
    marginTop: "5px",
    width: "150px",
  },
  buttonDiv: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
  },
  heart: {
    width: "30px",
    height: "15px",
    paddingTop: "20px",
  },
  AdditionalDetails: {
    backgroundColor: "#F6F5FF",
    width: "100%",
    height: "300px",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#F6F5FF",
      width: "100%",
      height: "300px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: "40%",
    },
    [theme.breakpoints.down("md")]: {},
  },
  AdditionalDetailsSub: {
    display: "flex",
    paddingLeft: "22%",
    marginTop: "100px",
    fontFamily: "Josefin Sans",
    paddingTop: "3%",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "row",
      paddingRight: "20%",
      paddingLeft: "8%",
      marginTop: "500px",
    },
  },
  buttonSub: {
    fontFamily: "Josefin Sans",
    marginLeft: "10px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "35px",
      marginLeft: "0px",
    },
  },
  content: {
    fontFamily: "Josefin Sans",
    fontSize: "12px",
    paddingTop: "10px",
    display: "flex",
    justifyContent: "center",
    width: "800px",
    marginLeft: "23%",
    marginTop: "20px",
    color: "#A9ACC6",
    [theme.breakpoints.down("sm")]: {
      width: "350px",
      marginLeft: "2%",
    },
    [theme.breakpoints.down("md")]: {
      paddingRight: "50px",
    },
  },

  RH: {
    fontFamily: "Josefin Sans",
    display: "flex",
    marginLeft: "400px",
    marginBottom: "20px",
    marginTop: "100px",
    color: "#101750",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20px",
      marginBottom: "20px",
      marginTop: "300px",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "50px",
    },
  },
  carousel: {
    marginBottom: "50px",
    paddingLeft: "390px",
    paddingRight: "500px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
      paddingRight: "0px",
      marginBottom: "0px",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0px",
      paddingRight: "0px",
      marginBottom: "0px",
    },
  },
  footerphoto: {
    width: "100%",
    paddingLeft: "30%",
    paddingRight: "35%",
    marginBottom: "100px",
    boxShadow: "0 0 0 0",
    marginTop: "100px",
    [theme.breakpoints.down("sm")]: {
      width:"0%",
      paddingLeft: "0%",
      paddingRight: "0%",
      marginBottom: "0px",
      marginTop: "0px",
      height:"0px"

    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      paddingLeft: "0%",
      paddingRight: "0%",
    },
  },
}));
