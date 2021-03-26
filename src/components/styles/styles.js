import { css } from "styled-components";

export const variables = {
  baseColor: "#7c4dff",
  baseTextColor: "#ffffff",
  cardBackgroudColor: "#ffffff",
  bodyBackgroundColor: "#f5f5f5",
  sidebarBackgroundColor: "#e6e6e6",
  searchItemBorderColor: "rgba(0, 0, 0, 0.08)",
  deleteIconColor: "#0000000",
  overlayBackgroundColor: "rgba(0, 0, 0, 0.7)",
  cardBoxShadow: "0 2px 11px 0 rgba(222, 222, 222, 0.5)",
  cardBoxShadowDark: "0 2px 7px 0 rgba(118, 118, 118, 0.2)",
  sidebarBoxShadow:
    "0px 15px 12px -5px rgba(0, 0, 0, 0.3),0px 8px 26px 2px rgba(0, 0, 0, 0.06), 0px 6px 30px 5px rgba(0, 0, 0, 0.04)",
  dropdownBoxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.1)",
  borderRadius: "0.3rem"
};

export const button = css`
  text-transform: uppercase;
  cursor: pointer;
  background: ${variables.baseColor};
  box-shadow: none;
  border: none;
  color: ${variables.baseTextColor};
  border-radius: ${variables.borderRadius};
  transition: 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: darken($color: ${variables.baseColor}, $amount: 8%);
  }

  :disabled {
    background: rgba(124, 77, 255, 85%);
    color: #eaeaea;
    cursor: not-allowed;
  }
`;

export const container = css`
  max-width: 1064px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const productImg = css`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const alignVertical = css`
  display: flex;
  align-items: center;
`;

export const heading = css`
  color: ${variables.baseColor};
  text-align: center;
`;
