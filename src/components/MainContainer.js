import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  // const [stocksMain, setStocksMain] = useState([])
  const [stocksDisp, setStocksDisp] = useState([])
  const [stocksPurchased, setStocksPurchased] = useState([])
  const [sortVal, setSortVal] = useState('Alphabetically')
  const [filterType, setFilterType] = useState('Tech')
  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(data => {
      // setStocksMain(data)
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
  
  const filteredStocks = stocksDisp.filter((stock) => stock.type === filterType)
  const sortedArr = filteredStocks.sort((a, b) => {
    if (sortVal === "Alphabetically") {
      const tickerA = a.ticker;
      const tickerB = b.ticker;
      if (tickerA < tickerB) {
        return -1
      } else {
        return 1
      }
    } else {
      return a.price - b.price
    }
  })

  return (
    <div>
      <SearchBar handleFilter={setFilterType} handleSort={setSortVal}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocksToDisplay={sortedArr} handlePurchaseClick={handlePurchaseClick}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={stocksPurchased} handleSellClick={handleSellClick}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
