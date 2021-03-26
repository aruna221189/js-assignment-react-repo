import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";
import { productAdded } from "../../redux/slices/cartSlice";
import { debounce } from "../utils";
import { Wrapper, Input, List, Item, TinyButton } from "./SearchStyling";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [searchItems, setSearchItems] = useState([]);

  const products = useSelector(state => state.products.products);
  const cartItems = useSelector(state => state.cart.cartItems);

  const dispatch = useDispatch();

  const searchProducts = () => {
    if (inputValue.length > 3) {
      const filteredItems = products.filter(product => {
        return (
          product.title.toLowerCase().includes(inputValue) ||
          product.description.toLowerCase().includes(inputValue)
        );
      });
      setSearchItems(filteredItems);
    } else {
      setSearchItems([]);
    }
  };

  const onInputChange = e => {
    setInputValue(e.target.value);
    const debouncedSearch = debounce(() => searchProducts(), 250);
    debouncedSearch();
  };

  const searchItemsList = searchItems.map(product => {
    const isProductInCart = cartItems.find(ele => ele.id === product.id);
    return (
      <Item key={product.id} onClick={() => dispatch(productAdded(product))}>
        <div>{product.title}</div>
        <TinyButton disabled={isProductInCart}>
          {isProductInCart ? "Added" : "Add to cart"}
        </TinyButton>
      </Item>
    );
  });

  return (
    <Wrapper>
      <OutsideClickHandler
        onOutsideClick={() => {
          setSearchItems([]);
          setInputValue("");
        }}
      >
        <Input
          type="text"
          placeholder="Search Products"
          value={inputValue}
          onChange={onInputChange}
        />
        {searchItems.length ? <List>{searchItemsList}</List> : null}
      </OutsideClickHandler>
    </Wrapper>
  );
}

export default Search;
