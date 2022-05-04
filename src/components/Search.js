import React from "react";

function Search({input, onFormChange}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }
  function onChange(e){
    // console.log(e.target.value)
    onFormChange(e.target.value)
  }
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={input}
        onChange={onChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
