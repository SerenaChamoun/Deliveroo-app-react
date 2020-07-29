import React from "react";
import Order from "./Order";

const CartToFill = ({ cart, setCart }) => {
  let subTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subTotal += cart[i].price * cart[i].quantity;
  }
  let total = subTotal + 2.5;

  return (
    <div className="cartToFill">
      <div>
        <div>Valider votre Panier</div>
      </div>
      <Order cart={cart} setCart={setCart} />
      <div className="line"></div>
      <div className="sousTotal">
        <div>
          <div>Sous-total</div>
          <div>{subTotal} €</div>
        </div>
        <div>
          <div>Frais de livraison</div>
          <div>2,50 €</div>
        </div>
      </div>
      <div className="line"></div>
      <div className="total">
        <div>Total</div>
        <div>{total} €</div>
      </div>
    </div>
  );
};

export default CartToFill;
