import React from "react";

const Order = ({ cart, setCart }) => {
  return (
    <div className="order">
      {cart.map((elem, index) => {
        return (
          <div className="menu">
            <div className="col-1">
              <button
                onClick={(event) => {
                  const newCart = [...cart];
                  newCart[index].quantity = newCart[index].quantity - 1;
                  if (newCart[index].quantity <= 0) {
                    newCart.splice(index, 1);
                  }
                  setCart(newCart);
                }}
              >
                -
              </button>
              <div> {elem.quantity} </div>
              <button
                onClick={(event) => {
                  const newCart = [...cart];
                  newCart[index].quantity = newCart[index].quantity + 1;
                  setCart(newCart);
                }}
              >
                +
              </button>
            </div>
            <div className="col-2">
              <div className="menu">
                <div> {elem.title} </div>
              </div>
            </div>

            <div className="col-3">
              <div> {elem.price} €</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Order;
