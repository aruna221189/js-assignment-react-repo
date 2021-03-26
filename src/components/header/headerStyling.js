import styled, { keyframes } from "styled-components";
import { variables, container, alignVertical, heading } from "../styles/styles";

export const Wrapper = styled.header`
  background: ${variables.baseColor};
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const Container = styled.div`
  ${container}
  ${alignVertical}
  height: 5rem;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: ${variables.baseTextColor};
  font-size: 2rem;
`;

export const Right = styled.div`
  ${alignVertical}
`;

export const HeaderCart = styled.div`
  color: ${variables.baseTextColor};
  font-size: 2rem;
  position: relative;
  margin-right: 1.5rem;

  &.header-cart-full {
    cursor: pointer;
  }
`;
const pulse = keyframes`
from {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
}

50% {
  -webkit-transform: scale3d(1.5, 1.5, 1.5);
  transform: scale3d(1.5, 1.5, 1.5);
}

to {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
}
`;
export const HeaderCartValue = styled.div`
  ${alignVertical}
  ${heading}
  font-size: 1.2rem;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: -0.5rem;
  right: -1.5rem;
  background: ${variables.baseTextColor};
  justify-content: center;
  font-weight: 500;

  &.animate-animated {
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  &.animate-pulse {
    -webkit-animation-name: ${pulse};
    animation-name: ${pulse};
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
`;
