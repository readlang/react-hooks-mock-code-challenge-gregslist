import React, {useState} from "react";

function ListingCard( {item, deleteItem} ) {
  const [favorite, setFavorite] = useState(false)

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button 
          className="emoji-button favorite active"
          onClick={()=> setFavorite(false)}
          >★</button>
        ) : (
          <button className="emoji-button favorite"
          onClick={()=> setFavorite(true)}
          >☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button className="emoji-button delete"
          onClick={()=> deleteItem(item.id)}
        >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
