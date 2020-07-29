import React from "react";

const Meal = ({
  meal,
  title,
  description,
  price,
  popular,
  pictureLink,
  cart,
  setCart,
}) => {
  const handleMealClick = (event) => {
    const newCart = [...cart];

    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].title === title) {
        console.log(newCart);
        newCart[i].quantity = newCart[i].quantity + 1;
        setCart(newCart);
        return;
        //soit je mets un return soit une condition qui m'empeche de passser dans la suite du code et pusher.
      }
    }
    const numberPrice = Number(price);
    newCart.push({ title: title, price: numberPrice, quantity: 1 });
    setCart(newCart);
  };

  return (
    <div className="meal" onClick={handleMealClick}>
      <div className="mealInfo">
        <h3>{title}</h3>
        <div className="description">{description.slice(0, 60)}</div>
        <div className="price">{price} €</div>
        {popular && <span>Popular</span>}
      </div>
      <div className="mealImage">
        {pictureLink && <img src={pictureLink} alt={title} />}
      </div>
    </div>
  );
};

export default Meal;
