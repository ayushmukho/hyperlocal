import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./actions/products";
const App = () => {
  const parcel = useSelector((state) => state);
  const { products: { products, isLoading } } = parcel;
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getProducts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log("Products: ", products);
  console.log("Loading: ", isLoading);

  return <div>Hello world!</div>;
};

export default App;
