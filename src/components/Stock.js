import React from "react";

function Stock({stockObj, onStockClick}) {
  const {name, price} = stockObj
  
  
  return (
    <div>
      <div className="card" onClick={() => onStockClick(stockObj)}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
