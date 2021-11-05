import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    maxWidth: 268,
    cursor: "pointer",
    // margin: "auto",
    borderRadius: "12px",
    border: "1px solid #D1D1D1",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    padding: "35%",
    margin: "20px",
    borderRadius: "12px",
  },
  content: {
    textAlign: "left",
    padding: theme.spacing(3),
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -theme.spacing(1),
    },
  },
  mid: {
    padding: "0 20px 8px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "-10px",
  },
  button: {
    borderRadius: "12px",
    backgroundColor: "#FE8400",
    border: "2px solid #FFDC5F",
    padding: "12px",
    width: "100px",
    height: "36px",
    fontSize: "10px",
    color: "white",
  },
}));
