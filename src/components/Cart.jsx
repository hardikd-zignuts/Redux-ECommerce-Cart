import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <>
      <h1 className="text-light">Your Cart</h1> <hr />
      <div>
        <CartItem />
      </div>
    </>
  );
};

export default Cart;
