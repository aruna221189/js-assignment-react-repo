import styled, { keyframes } from "styled-components";
import { variables } from "../styles/styles";
const slideIn = keyframes`
  100% {
    transform: translateX(0%);
  }
`;
const slideOut = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`;
export const Wrapper = styled.aside`
  width: 30rem;
  height: 100%;
  box-shadow: ${variables.sidebarBoxShadow};
  position: fixed;
  overflow-y: auto;
  top: 0;
  right: 0;
  transform: translateX(100%);
  z-index: 2;
  background: ${variables.sidebarBackgroundColor};
  padding: 0 2rem;

  &.slide-in {
    animation: ${slideIn} 0.5s forwards;
  }
  &.slide-out {
    animation: ${slideOut} 0.5s forwards;
    -webkit-animation: ${slideOut} 0.5s forwards;
  }
`;
