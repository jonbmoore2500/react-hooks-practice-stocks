import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioStocks}) {
  function onSellClick(sellId) {
    console.log('you sold this stock', sellId)
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
