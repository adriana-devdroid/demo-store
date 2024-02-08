import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductItem from "./ProductItem";
import { useSearchParams } from "react-router-dom";
import { useSearchProducts } from "../hooks/useSearchProducts";
const ProductsScreen = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let [searchResult] = useSearchProducts(searchParams.get("search"));

  return (
    <>
      <Container>
        <Row xs="auto">
          {searchResult.map((product, index) => {
            return <ProductItem product={product} key={index} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default ProductsScreen;
