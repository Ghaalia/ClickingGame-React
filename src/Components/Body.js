import React from "react";

const Body = ({
  PlanetsDestroyed,
  setPlanetsDestroyed,
  currency,
  setCurrency,
  amount,
  setAmount,
}) => {
  const Add = () => {
    setPlanetsDestroyed(PlanetsDestroyed + amount);
    setCurrency(currency + amount);
  };

  return (
    <div>
      <h1>X {currency}</h1>
      <h1>{PlanetsDestroyed}</h1>
      <button onClick={Add}>Destroy</button>
    </div>
  );
};

export default Body;
