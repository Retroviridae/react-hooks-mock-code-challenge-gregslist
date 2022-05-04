import React from "react";
import Search from "./Search";

function Header({input, handleFormChange}) {
  function onFormChange(value){
    // console.log(value)
    handleFormChange(value)
  }
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search input={input} onFormChange={onFormChange}/>
    </header>
  );
}

export default Header;
