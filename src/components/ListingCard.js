import React,{useState} from "react";

function ListingCard({ listing, onDeleteClick }) {
  const [clicked,setClicked]=useState(false)
  function handleClick(){
    setClicked(!clicked)
  }
  function deleteClick(e){
    onDeleteClick(e.target.id)
    // console.log(e.target.id)
  }

  return (
    <li className="card" key={listing.id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {clicked ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete"onClick={deleteClick} id={listing.id}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
// {
//   "id": 1,
//   "description": "heater",
//   "image": "./images/heater.jpg",
//   "location": "BROOKLYN"
// }