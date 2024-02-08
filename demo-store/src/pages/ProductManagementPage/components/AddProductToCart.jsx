import React from "react";
import useCartStore from "../../../store/useCartStore";

const AddProductToCart = ({ cartItem }) => {
  const addItem = useCartStore((state) => state.addItem);
  const products = useCartStore((state) => state.products);

  const handleClickAddToCart = () => {
    var index = products.findIndex((item) => item.id == cartItem.id);
    if (index === -1) {
      addItem(cartItem);
    }
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleClickAddToCart}>
        Agregar
      </button>
    </>
  );
};

export default AddProductToCart;
