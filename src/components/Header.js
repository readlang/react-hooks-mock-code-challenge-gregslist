import React from "react";
import Search from "./Search";

function Header( {searchWord, setSearchWord} ) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchWord={searchWord} setSearchWord={setSearchWord} />
    </header>
  );
}

export default Header;