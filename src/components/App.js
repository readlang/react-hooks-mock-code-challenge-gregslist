import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchWord, setSearchWord] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r=> r.json())
    .then(d=> setListings(d))
  }, [])

  let filteredListings
  
  searchWord !== "" ? 
  filteredListings = [...listings.filter( x => x.description.includes( searchWord ) )] :
  filteredListings = listings
  
  return (
    <div className="app">
      <Header searchWord={searchWord} setSearchWord={setSearchWord}  />
      <ListingsContainer listings={filteredListings} setListings={setListings}/>
    </div>
  );
}

export default App;