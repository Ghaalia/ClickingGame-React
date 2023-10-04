import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footner from "./Footner";

const HomePage = () => {
  const [currency, setCurrency] = useState(0);
  const [PlanetsDestroyed, setPlanetsDestroyed] = useState(0);
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(10);

  return (
    <>
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="bodyGame">
          <Body
            PlanetsDestroyed={PlanetsDestroyed}
            setPlanetsDestroyed={setPlanetsDestroyed}
            currency={currency}
            setCurrency={setCurrency}
            amount={amount}
            setAmount={setAmount}
          />
        </div>
        <div className="footner">
          <Footner
            currency={currency}
            setCurrency={setCurrency}
            PlanetsDestroyed={PlanetsDestroyed}
            setPlanetsDestroyed={setPlanetsDestroyed}
            setAmount={setAmount}
            amount={amount}
            price={price}
            setPrice={setPrice}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
