import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
  },
  inputBase: {
    marginLeft: "15px",
    width: "40vw",
    backgroundColor: "#F9F9F9",
    height: "54px",
    borderRadius: "12px 0 0 12px",
    paddingLeft: "10px",
  },
  iconButton: {
    backgroundColor: "#F9F9F9",
    height: "54px",
    borderRadius: "0 12px 12px 0",
    "&:hover": {
      background: "#F9F9F9",
    },
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    height: "54px",
    width: "40vw",
    borderRadius: "12px",
    marginLeft: "35vw",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  gifProduct: {
    marginLeft: "29vw",
    marginTop: "13vh",
    width: "20vw",
    height: "40vh",
  },
  heroBox: {
    backgroundColor: "background: #F9F9F9",
    border: "1px solid #D1D1D1",
    height: "42px",
    width: "236px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    margin: "0px 16px",
    borderRadius: "12px",
    marginRight: "16px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "600",
    color: "#151515",
    marginLeft: "20px",
    marginTop: "20px",
  },
  univ: {
    marginBottom: theme.spacing(5),
  },
  categories: {
    fontWeight: 600,
    color: "#151515",
    fontSize: "18px",
    marginBottom: theme.spacing(3),
  },
  price: {
    marginBottom: theme.spacing(1),
  },
  priceSlider: {
    marginBottom: theme.spacing(2),
  },
  button: {
    borderRadius: "12px",
    backgroundColor: "#FE8400",
    border: "2px solid #FFDC5F",
    padding: "12px",
    width: "90px",
    height: "36px",
    fontSize: "13px",
    color: "white",
  },
  button2: {
    borderRadius: "12px",
    backgroundColor: "#FFFFFF",
    border: "2px solid #FFDC5F",
    padding: "12px",
    width: "90px",
    height: "36px",
    fontSize: "13px",
    color: "#A9A9A9",
  },
  hide: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
