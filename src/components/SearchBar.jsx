import React from 'react';
   
function SearchBar({
  searchBox,
  searchCheckedBox,
  setSearchBox,
  setCheckedBox,
}) {
  const handleTextSearch = (event) => {
    setSearchBox(event.target.value);
  };
  const handleCheckedBox = (event) => {
    setCheckedBox(!searchCheckedBox);
  };
    
    return(
        <div>
          <h1>Search</h1>
           <input
          className="search-bar"
          type="text"
          value={searchBox}
          onChange={handleTextSearch}
        />
       
        
        <div>
              <input
          className="check-box"
          type="checkbox"
          value={searchCheckedBox}
          onChange={handleCheckedBox}
        />
        <p>Only show products in stock</p>
        </div>
        </div>   
    )
  }
  
  export default SearchBar;