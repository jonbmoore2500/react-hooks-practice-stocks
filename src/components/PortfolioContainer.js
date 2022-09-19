import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioStocks, handleSellClick}) {
  function onSellClick(sellObj) {
    handleSellClick(sellObj.id)
  }
  
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioStocks.map((stock) => (
          <Stock key={stock.ticker} stockObj={stock} onStockClick={onSellClick}/>
        ))
      }
    </div>
  );
}

export default PortfolioContainer;
