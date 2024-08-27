import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cartTile/CartTile"
import "./style.css"

function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);
  

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  console.log(totalCart ,cart);

  return (
    <div className="cartContainer">
      {cart && cart.length ? (
        <div className="do">
          <div className="cartItems">
          {
            cart.map((item)=> <CartTile item= {item}/>)
          }
          </div>
          <div className="sum">
          <h1>Your Cart Summary</h1>
          <p>Total Items: <span>{cart.length}</span> </p>
          <p>Total Price: <span>{totalCart}</span> </p>
          </div>
        </div>
      ) : (
        <div className="empty">
          <h1> Your Cart is Empty</h1>
          <Link to={"/"}>
            <button>Add Items</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
