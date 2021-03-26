import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productRemoveAll } from "../../redux/slices/cartSlice";
import {
  hideSidebar,
  setSidebarClassName
} from "../../redux/slices/sidebarSlice";
import CartItemsList from "./CartItemsList";
import { RupeeIcon, CloseIcon } from "../icons";
import { variables } from "../styles/styles";
import {
  StickyTop,
  Heading,
  CartClear,
  CartTotal,
  StickyBottom,
  SidebarClose
} from "./cartStyling";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const removeAllCartItems = () => {
    dispatch(hideSidebar());
    dispatch(productRemoveAll());
    dispatch(setSidebarClassName(""));
    document.body.classList.remove("show-overlay");
  };

  const cartTotal = cartItems?.reduce(
    (total, amount) => total + amount.price,
    0
  );

  return (
    <React.Fragment>
      <StickyTop>
        <SidebarClose
          onClick={() => {
            dispatch(hideSidebar());
            dispatch(setSidebarClassName("slide-out"));
            document.body.classList.remove("show-overlay");
          }}
        >
          <CloseIcon size="20" />
        </SidebarClose>
        <Heading>Cart</Heading>
      </StickyTop>
      <CartItemsList />
      <StickyBottom>
        <CartTotal>
          Total Amount: <RupeeIcon size="12" fill={variables.baseColor} />
          {cartTotal.toFixed(2)}
        </CartTotal>
        <CartClear onClick={removeAllCartItems}>Clear All</CartClear>
      </StickyBottom>
    </React.Fragment>
  );
}
export default Cart;
