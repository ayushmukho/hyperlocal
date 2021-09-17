import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./actions/products";
const App = () => {
  const parcel = useSelector((state) => state.products);
  const { products, isLoading } = parcel;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log("Product: ", parcel.products)
  console.log("Products: ", products);
  console.log("Loading: ", isLoading);

  return isLoading ? (
    <h1>Kuch nahi h randi....Loading</h1>
  ) : (
    products.map((product, i) => <h1 key={i}>{product.title}</h1>)
    // <h1>LOL</h1>
  );
};

export default App;
