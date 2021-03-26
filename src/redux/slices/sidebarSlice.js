import { createSlice } from "@reduxjs/toolkit";
export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    showSidebar: false,
    sideBarClassName: ""
  },
  reducers: {
    showSidebar: state => {
      state.showSidebar = true;
    },
    hideSidebar: state => {
      state.showSidebar = false;
    },
    setSidebarClassName: (state, action) => {
      state.sideBarClassName = action.payload;
    }
  }
});

export const {
  showSidebar,
  hideSidebar,
  setSidebarClassName
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
