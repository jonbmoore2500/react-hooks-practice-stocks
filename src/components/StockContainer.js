import React from "react";
import Stock from "./Stock";

function StockContainer({stocksToDisplay, handlePurchaseClick}) {
  
  function onPurchaseClick(stockObj) {
    handlePurchaseClick(stockObj)
  }
  
  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay.map((stock) => (
        <Stock key={stock.id} stockObj={stock} onStockClick={onPurchaseClick}/>
      ))}
    </div>
  );
}

export default StockContainer;
