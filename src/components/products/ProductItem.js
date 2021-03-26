import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAdded } from "../../redux/slices/cartSlice";
import { trimString } from "../utils";
import { RupeeIcon } from "../icons";
import {
  Image,
  Product,
  Footer,
  Name,
  Price,
  BigButton
} from "./productStyling";

function ProductItem(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const isProductInCart = cartItems?.some(ele => ele.id === product.id);

  const onAddProduct = () => {
    dispatch(productAdded(product));
  };

  return (
    <Product>
      <Image style={{ backgroundImage: `url(${product.image})` }} />
      <Footer>
        <div>
          <Name>{trimString(product.title, 20)}</Name>
          <Price>
            <RupeeIcon size="10" />
            {product.price}
          </Price>
        </div>
        <BigButton onClick={onAddProduct} disabled={isProductInCart}>
          {isProductInCart ? "Added" : "Add to cart"}
        </BigButton>
      </Footer>
    </Product>
  );
}
export default ProductItem;
