import React from "react";
import Meal from "./Meal";

const Categorie = ({ name, meals, cart, setCart }) => {
  return (
    <div className="categorie">
      {meals.length > 0 && (
        <div>
          <h2>{name}</h2>
          <div className="meals">
            {meals.map((meal, index) => {
              return (
                <Meal
                  meal={meal}
                  title={meal.title}
                  description={meal.description}
                  price={meal.price}
                  popular={meal.popular}
                  pictureLink={meal.picture}
                  cart={cart}
                  setCart={setCart}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categorie;
