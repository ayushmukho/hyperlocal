import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  nameDiv: {
    paddingLeft: "30%",
    backgroundColor: "#F6F5FF",
    height: "160px",
    paddingTop: "50px",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
     
    },
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
    height:"375px"
  },
  DetailSection: {
    display: "flex",
    marginTop: "50px",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    paddingLeft: "10px",
    paddingTop: "10px",
    width: "50%",
    fontFamily: "Josefin Sans",
    [theme.breakpoints.down("sm")]: {
      height: "800px",
      display: "flex",
      flexDirection: "column",
      width:"100%"
    },
    
  },
  Photos: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      
      display: "flex",
      flexDirection: "column"
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "25px",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column"
    },
  
  },
  smallPhotos: {
    marginBottom: "5px",
    paddingTop:"5px",
    width:"100px",
    [theme.breakpoints.down("sm")]: {
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
     marginLeft:"15px"
    },
  },

  smallPhotos2:{
    marginBottom: "5px",
    paddingTop:"5px",
    width:"100px",
    [theme.breakpoints.down("sm")]: {
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
    marginRight:"10px",
     marginLeft:"15px"
    },
  },

  smallPhotosdiv: {
    marginBottom: "5px",
    paddingTop:"5px",
    width:"100px",
    [theme.breakpoints.down("sm")]: {
      display:"flex",
      flexDirection:"row",
      width:"100%",
      
     
    },
  },

  largePhotos: {
    marginLeft: "10px",
    paddingTop:"20px",
    paddingBottom: "10px",
    width:"270px",
    [theme.breakpoints.down("sm")]: {
     width:"70%",
     marginLeft:"30px"
    },
  },
  largePhotos1: {
   boxShadow:"0 0 0 0"
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      marginBottom:"15px",
      marginTop:"10px"
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
  },
  description: {
    color: "#A9ACC6",
    fontFamily: "Josefin Sans",
    fontSize:"13px",
    paddingTop:"10px",
    width:"370px",
    paddingRight:"10px",
    fontFamily: "Josefin Sans",
    [theme.breakpoints.down("sm")]: {
    width:"370px",
    fontSize:"13px",
     },
    
  },
 add:{
     marginTop:"5px",
     width:"150px"
 },
 buttonDiv:{
     display:"flex",
     [theme.breakpoints.down("sm")]: {
      marginTop:"20px"
       },
 },
 heart:{
    width:"30px",
    height:"15px",
    paddingTop:"12px"
 },
 AdditionalDetails:{
  backgroundColor: "#F6F5FF",
  width:"100%",
  height:"500px"
 }
}));
