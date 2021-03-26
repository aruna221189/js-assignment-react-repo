import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productRemoved } from "../../redux/slices/cartSlice";
import { trimString } from "../utils";
import { DeleteIcon, RupeeIcon } from "../icons";
import {
  CartItem,
  CartItemImg,
  CartItemDetails,
  CartItemName,
  CartItemPrice,
  CartItemRemove
} from "./cartStyling";

function CartItemsList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const removeCartItem = id => {
    dispatch(productRemoved(id));
  };

  const cartItemsList = cartItems?.map(product => (
    <CartItem key={product.id}>
      <CartItemImg style={{ backgroundImage: `url(${product.image})` }} />
      <CartItemDetails>
        <div>
          <CartItemName>{trimString(product.title, 20)}</CartItemName>
          <CartItemPrice>
            <RupeeIcon size="10" />
            {product.price}
          </CartItemPrice>
        </div>
        <CartItemRemove onClick={() => removeCartItem(product.id)}>
          <DeleteIcon size="14" fill="gray" />
        </CartItemRemove>
      </CartItemDetails>
    </CartItem>
  ));

  return (
    <React.Fragment>
      <div>{cartItemsList}</div>
    </React.Fragment>
  );
}
export default CartItemsList;
