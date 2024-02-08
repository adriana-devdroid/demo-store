import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductItem from "./ProductItem";
import { useSearchParams } from "react-router-dom";
import { useSearchProducts } from "../hooks/useSearchProducts";
import { APP_STRINGS } from "../../../strings/strings";

const ProductsScreen = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let [searchResult] = useSearchProducts(searchParams.get("search"));

  function Search() {
    if (searchResult.length > 0) {
      return (
        <Row xs="auto">
          {searchResult.map((product, index) => {
            return <ProductItem product={product} key={index} />;
          })}
        </Row>
      );
    } else {
      return <h3>{APP_STRINGS.EMPTY_SEARCH}</h3>;
    }
  }

  return (
    <>
      <Container>
        <Search></Search>
      </Container>
    </>
  );
};

export default ProductsScreen;
