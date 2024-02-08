import React from "react";
import { priceFormat } from "../../ProductManagementPage/helpers/priceFormat";

import { Card, Col } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import useCartStore from "../../../store/useCartStore";

const CartItem = ({ cartItem }) => {
  const { id, name, imageUrl, productSize, price } = cartItem;
  const removeItem = useCartStore((state) => state.removeItem);

  const handleDeleteCartItem = () => {
    removeItem(id);
  };

  return (
    <Col>
      <Card className="p-2" style={{ width: "200px", margin: "10px" }}>
        <Card.Img
          className="mx-auto"
          style={{
            padding: "0.5rem",
            maxWidth: 100,
            maxHeight: 100,
            borderRadius: 20,
          }}
          variant="left"
          src={imageUrl}
        />
        <Card.Title className="text-center text-secondary">
          {name + " " + productSize}
        </Card.Title>

        <Card.Body className="text-center">
          <p className="text-center text-secondary">{priceFormat(price)}</p>

          <Card.Text style={{ textAlign: "center" }}>
            <IconButton aria-label="delete" onClick={handleDeleteCartItem}>
              <DeleteIcon />
            </IconButton>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CartItem;
