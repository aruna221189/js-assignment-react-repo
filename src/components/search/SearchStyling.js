import styled from "styled-components";
import { variables, button } from "../styles/styles";

export const Wrapper = styled.div`
  position: relative;
  margin-right: 2rem;
`;

export const Input = styled.input`
  height: 3rem;
  width: 20rem;
  padding: 0.8rem 1rem;
`;

export const List = styled.ul`
  position: absolute;
  width: 100%;
  top: 100%;
  background-color: ${variables.baseTextColor};
  box-shadow: ${variables.dropdownBoxShadow};
  font-size: 1.4rem;
  line-height: 1.25;
  max-height: 30rem;
  overflow: auto;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  padding: 0.8rem 1rem;
  border-bottom: 1px solid ${variables.searchItemBorderColor};
  list-style-type: none;
`;

export const TinyButton = styled.button`
  ${button}
  height: 2rem;
  padding: 0.2rem 0.5rem;
  width: 100%;
  margin-top: 0.5rem;
`;
