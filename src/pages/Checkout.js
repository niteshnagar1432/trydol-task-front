import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartReducer";

function Checkout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, []);

  return (
    <div>
      <NavBar />
      <Alert variant="success">Thank you for your order.</Alert>
    </div>
  );
}

export default Checkout;
