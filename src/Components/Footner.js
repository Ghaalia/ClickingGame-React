import React from "react";

const Footner = ({
  currency,
  setCurrency,
  PlanetsDestroyed,
  setPlanetsDestroyed,
  setAmount,
  amount,
  price,
  setPrice,
}) => {
  return (
    <div>
      {currency >= price && (
        <button
          onClick={() => {
            setCurrency(currency - price);
            setAmount(amount * 2);
            setPrice(price * 2);
          }}
        >
          UpGrade your Distroy
        </button>
      )}
    </div>
  );
};

export default Footner;
