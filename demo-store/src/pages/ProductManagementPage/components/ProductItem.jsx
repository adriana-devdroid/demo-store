import React from "react";
import { Card, Col } from "react-bootstrap";
import { priceFormat } from "../helpers/priceFormat";
import AddProductToCart from "./AddProductToCart";

const ProductItem = ({ product }) => {
  const { name, imageUrl, price, productSize } = product;

  return (
    <Col xs={3}>
      <Card className="d-flex" style={{ minWidth: "150px", margin: "10px" }}>
        <Card.Img
          className="mx-auto"
          style={{
            maxWidth: 140,
            maxHeight: 140,
            borderRadius: 20,
          }}
          variant="top"
          src={imageUrl}
        />
        <Card.Title className="text-center text-secondary">
          {name} {productSize}
        </Card.Title>
        <Card.Body className="text-center">
          <h6 className="text-center text-secondary">{priceFormat(price)}</h6>
          <Card.Text style={{ textAlign: "justify" }}></Card.Text>

          <AddProductToCart cartItem={product} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
