import React, {useState} from "react";

function Search( {searchWord, setSearchWord} ) {
  const [ tempSearchWord, setTempSearchWord ] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    setSearchWord(tempSearchWord)
  }
  
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={tempSearchWord}
        onChange={(e) => setTempSearchWord(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;