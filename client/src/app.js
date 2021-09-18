import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./actions/products";
import SignUp from "./components/authentication/SignUp/SignUp";
const App = () => {
  const parcel = useSelector((state) => state.allProducts);
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
    <>
    <SignUp/>
 )
    </>
  );
};

export default App;