import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {listings, setListings} ) {

  const deleteItem = function (itemId) {
    setListings( listings.filter(x=> x.id !== itemId ) )
   
    // next delete the item from server using fetch delete
    fetch(`http://localhost:6001/listings/${itemId}`, {
      method: "DELETE",
    })
    .then(r=> r.json())
    .then(d=> console.log(d))
  }

  return (
    <main>
      <ul className="cards">
        { listings.map((item)=> <ListingCard key={item.id} item={item} 
        deleteItem={deleteItem}
        /> ) }
      </ul>
    </main>
  );
}

export default ListingsContainer;