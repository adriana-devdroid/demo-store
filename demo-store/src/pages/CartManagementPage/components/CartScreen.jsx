import React from "react";
import useCartStore from "../../../store/useCartStore";

import { Container, CardGroup, Row, Card, Col } from "react-bootstrap";
import CartItem from "./CartItem";

import Button from "react-bootstrap/Button";
import { priceFormat } from "../../ProductManagementPage/helpers/priceFormat";
import { APP_STRINGS } from "../../../strings/strings";

export default function CartScreen() {
  const total = useCartStore((state) => state.totalPrice());
  const products = useCartStore((state) => state.products);

  function Cart() {
    if (products.length > 0) {
      return (
        <Row>
          {products.map((product, index) => {
            return <CartItem cartItem={product} key={index} />;
          })}
        </Row>
      );
    } else {
      return <h3>{APP_STRINGS.EMPTY_CAR}</h3>;
    }
  }

  function BuyButton() {
    if (products.length > 0) {
      return <Button variant="primary">{APP_STRINGS.BUTTON_BUY}</Button>;
    } else {
      return (
        <Button variant="secondary" disabled>
          {APP_STRINGS.BUTTON_BUY}
        </Button>
      );
    }
  }

  return (
    <>
      <Container>
        <CardGroup>
          <Col xs={6}>
            <Cart></Cart>
          </Col>
          <Col xs={6}>
            <Card style={{ width: "300px", margin: "10px" }}>
              <Card.Body>
                <Card.Title>Total: {priceFormat(total)}</Card.Title>
                <Card.Text></Card.Text>
                <BuyButton></BuyButton>
              </Card.Body>
            </Card>
          </Col>
        </CardGroup>
      </Container>
    </>
  );
}
