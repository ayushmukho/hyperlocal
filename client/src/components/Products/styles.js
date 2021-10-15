import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
  },
  univ: {
    marginBottom: theme.spacing(5)
  },
  categories: {
    fontWeight: 600,
    color: "#151515",
    fontSize: "18px",
    marginBottom: theme.spacing(3)
  },
  price: {
    marginBottom: theme.spacing(1)
  },
  priceSlider: {
    marginBottom: theme.spacing(2)
  }
}));
