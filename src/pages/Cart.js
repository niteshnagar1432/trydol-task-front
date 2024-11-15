import React, { useState } from "react";
import NavBar from "./NavBar";
import { Container, Button, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart);

  // Function to calculate total price
  const calculateTotal = () => {
    let totalPrice = 0;
    cartItems.forEach((element) => {
      totalPrice =
        totalPrice + parseInt(element.price) * parseInt(element.quantity);
    });
    return totalPrice;
  };

  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <Container>
        <h2>Shopping Cart</h2>
        {cartItems && cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ListGroup className="mt-2">
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <strong>{item.name}</strong> - ₹{item.price} * {item.quantity}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <div className="d-flex justify-content-between mt-3">
              <h4>Total: ₹{calculateTotal()}</h4>
              <Button onClick={() => navigate("/checkout")} variant="primary">
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}

export default Cart;
