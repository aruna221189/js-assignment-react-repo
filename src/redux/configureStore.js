import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productsReducer from "./slices/productsSlice";
import sidebarReducer from "./slices/sidebarSlice";
import cartReducer from "./slices/cartSlice";
import { watcherSaga } from "./sagas/rootSaga";
const sagaMiddleware = createSagaMiddleware();
let store = configureStore({
  reducer: {
    products: productsReducer,
    sidebar: sidebarReducer,
    cart: cartReducer
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});
sagaMiddleware.run(watcherSaga);

export default store;
