import styled from "styled-components";
import {
  variables,
  button,
  productImg,
  alignVertical,
  heading
} from "../styles/styles";

export const StickyTop = styled.div`
  position: sticky;
  top: 0;
  background: ${variables.sidebarBackgroundColor};
  padding-bottom: 1.5rem;
`;

export const Heading = styled.h2`
  ${heading}
  font-size: 1.6rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

export const CartItem = styled.div`
  ${alignVertical}
  background-color: ${variables.cardBackgroudColor};
  color: ${variables.baseColor};
  margin: 1.5rem 0;
  border-radius: ${variables.borderRadius};
  box-shadow: ${variables.cardBoxShadow};

  &:first-child {
    margin-top: 0;
  }
`;

export const CartItemImg = styled.div`
  ${productImg}
  background-image: url("../images/default.png");
  width: 4rem;
  height: 4rem;
`;

export const CartItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: 1rem 1.5rem;
`;
export const CartItemName = styled.div`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;
export const CartItemPrice = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
`;
export const CartItemRemove = styled.span`
  cursor: pointer;
  align-self: center;
  padding: 0.5rem;
  color: ${variables.deleteIconColor};
`;
export const CartTotal = styled.div`
  ${heading}
  margin-bottom: 2rem;
  font-weight: 500;
  font-size: 1.6rem;
`;
export const CartClear = styled.button`
  ${button}
  margin: 0 auto;
  padding: 0.5rem 1rem;
  height: 3rem;
`;

export const StickyBottom = styled.div`
  position: sticky;
  bottom: 0;
  background-color: ${variables.sidebarBackgroundColor};
  padding: 1.5rem 0;
`;
export const SidebarClose = styled.div`
  position: sticky;
  top: 0;
  cursor: pointer;
  font-size: 2rem;
  color: ${variables.baseColor};
  margin-top: 1.5rem;
  padding: 0.5rem;
  display: inline-block;
`;
