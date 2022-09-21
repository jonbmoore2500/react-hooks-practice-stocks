import React, {useState} from "react";

function SearchBar({handleFilter, handleSort}) {
  const [alphaChecked, setAlphaChecked] = useState(true)
  const [priceChecked, setPriceChecked] = useState(false)
  function onChangeFilter(e) {
    handleFilter(e.target.value)
  }
  
  function onChangeSort(e) {
    setAlphaChecked(!alphaChecked)
    setPriceChecked(!priceChecked)
    handleSort(e.target.value)
  }


  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={alphaChecked}
          onChange={onChangeSort}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={priceChecked}
          onChange={onChangeSort}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={onChangeFilter}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
