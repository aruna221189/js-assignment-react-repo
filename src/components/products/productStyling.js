import styled from "styled-components";
import { container, productImg, button, heading } from "../styles/styles";

export const PageTitle = styled.h2`
  ${heading}
  font-size: 2.4rem;
  margin-top: 5rem;
`;
export const Image = styled.div`
  ${productImg}
  height: 14rem;
`;
export const Product = styled.div`
  padding: 1.5rem;
  box-shadow: 0 2px 7px 0 rgba(118, 118, 118, 0.2);
  background-color: #ffffff;
`;

export const GridContainer = styled.div`
  ${container}
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 5rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2.5rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Footer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  padding-top: 1.5rem;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: -1.5rem;
    width: calc(100% + 3rem);
    height: 0.1rem;
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

export const Name = styled.h1`
  font-size: 1.6rem;
  font-weight: 400;
  margin: 0 0 1rem;
`;

export const Price = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const BigButton = styled.button`
  ${button}
  padding: 0.5rem 1rem;
  height: 4rem;
  min-width: 11rem;
`;
