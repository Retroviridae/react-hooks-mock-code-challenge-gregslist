import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings,handleDelete }) {
  function onDeleteClick(id){
    handleDelete(id)
  }
  return (
    <main>
      <ul className="cards">
        {listings.map(listing=><ListingCard key={listing.description}listing={listing} onDeleteClick={onDeleteClick}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
