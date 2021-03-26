import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showSidebar,
  setSidebarClassName
} from "../../redux/slices/sidebarSlice";
import Search from "../search/Search";
import { CartIcon } from "../icons";
import { variables } from "../styles/styles";
import {
  Wrapper,
  Container,
  Title,
  Right,
  HeaderCart,
  HeaderCartValue
} from "./headerStyling";

function Header() {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.cartItems);
  const products = useSelector(state => state.products.products);

  const [cartAnimate, setCartAnimate] = useState(false);

  useEffect(() => {
    setCartAnimate(true);
    let animateTimer = setTimeout(() => setCartAnimate(false), 1000);
    return () => {
      clearTimeout(animateTimer);
    };
  }, [cartItems]);

  const headerCartClick = () => {
    document.body.classList.add("show-overlay");
    dispatch(showSidebar());
    dispatch(setSidebarClassName("slide-in"));
  };

  return (
    <Wrapper>
      <Container>
        <Title>Products</Title>
        <Right>
          {products.length ? (
            <React.Fragment>
              <Search />
              <HeaderCart
                className={cartItems?.length ? "header-cart-full" : null}
                onClick={headerCartClick}
              >
                <CartIcon size="20" fill={variables.baseTextColor} />
                <HeaderCartValue
                  className={
                    cartAnimate ? "animate-animated animate-pulse" : null
                  }
                >
                  {cartItems?.length || 0}
                </HeaderCartValue>
              </HeaderCart>
            </React.Fragment>
          ) : null}
        </Right>
      </Container>
    </Wrapper>
  );
}

export default Header;
