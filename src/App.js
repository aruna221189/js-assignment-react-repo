import "./App.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSidebarClassName } from "./redux/slices/sidebarSlice";
import ProductListing from "./components/products/ProductListing";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  useEffect(() => {
    if (cartItems.length === 0) {
      document.body.classList.remove("show-overlay");
      dispatch(setSidebarClassName(""));
    }
  }, [cartItems]);

  return (
    <React.Fragment>
      <Header />
      <ProductListing />
      {cartItems?.length ? <Sidebar /> : null}
    </React.Fragment>
  );
}

export default App;
