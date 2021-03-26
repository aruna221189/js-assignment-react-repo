import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GridContainer, PageTitle } from "./productStyling";
import ProductItem from "./ProductItem";
import Loader from "../loader/Loader";
import { FETCH_DATA } from "../../redux/sagas/constants";

function ProductListing() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    dispatch({ type: FETCH_DATA });
  }, [dispatch]);

  const renderList = products?.map(product => (
    <ProductItem product={product} key={product.id} />
  ));

  return (
    <main>
      {products && products.length ? (
        <React.Fragment>
          <PageTitle>Items</PageTitle>
          <GridContainer>{renderList}</GridContainer>
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default ProductListing;
