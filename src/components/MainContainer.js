import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocksMain, setStocksMain] = useState([])
  const [stocksDisp, setStocksDisp] = useState([])
  const [stocksPurchased, setStocksPurchased] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(data => {
      setStocksMain(data)
      setStocksDisp(data)
    })
  }, [])

  function handlePurchaseClick(purchaseObj) {
    if (stocksPurchased.some((stock) => stock === purchaseObj) === true) {
      return
    } else {
      setStocksPurchased([...stocksPurchased, purchaseObj])
    }    
  }
  function handleSellClick(sellId) {
    const newPurchasedArr = stocksPurchased.filter((stock) => stock.id !== sellId)
    setStocksPurchased(newPurchasedArr)
  }
  
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocksToDisplay={stocksDisp} handlePurchaseClick={handlePurchaseClick}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={stocksPurchased} handleSellClick={handleSellClick}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
