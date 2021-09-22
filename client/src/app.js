
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import SignUp from "./components/authentication/SignUp/SignUp";
import Products from "./components/Products/Products";
const App = () => {
  const parcel = useSelector((state) => state.user);

  // console.log("Product: ", parcel.products)
  console.log("User: ", parcel);

  return (
    <>
      <ToastContainer />
      <SignUp />
      
    </>
  );
};

export default App;
