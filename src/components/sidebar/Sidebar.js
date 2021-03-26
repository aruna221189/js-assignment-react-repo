import React from "react";
import { useSelector, useDispatch } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";
import {
  hideSidebar,
  setSidebarClassName
} from "../../redux/slices/sidebarSlice";
import Cart from "../cart/Cart";
import { Wrapper } from "./sidebarStyling";

function Sidebar() {
  const dispatch = useDispatch();
  const sidebarClassName = useSelector(state => state.sidebar.sideBarClassName);
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        dispatch(hideSidebar());
        dispatch(setSidebarClassName(""));
        document.body.classList.remove("show-overlay");
      }}
    >
      <Wrapper className={sidebarClassName}>
        <Cart />
      </Wrapper>
    </OutsideClickHandler>
  );
}
export default Sidebar;
