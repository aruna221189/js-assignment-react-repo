import React from "react";
import { Container } from "./loaderStyling";
import loaderImg from "../../assets/images/loader.gif";

function Loader() {
  return (
    <Container>
      <img src={loaderImg} width="100" />
    </Container>
  );
}
export default Loader;
