import React from "react";
import Stock from "./Stock";

function StockContainer({stocksToDisplay}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay.map((stock) => (
        <Stock key={stock.id} stockObj={stock}/>
      ))}
    </div>
  );
}

export default StockContainer;
