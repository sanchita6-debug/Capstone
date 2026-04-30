import React from "react";

function FilterBar({ setSearch, setSort }) {

  return (
    <div className="filter">

      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>

    </div>
  );
}

export default FilterBar;