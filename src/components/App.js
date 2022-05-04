import React,{ useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings,setListings]=useState([])
  const [input,setIntput] =useState('')

  useEffect(()=>
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(data => setListings(data))
  ,[]
  )

  function handleDelete(id){
    const intID= parseInt(id,10)
    fetch(`http://localhost:6001/listings/${id}`, { method: 'DELETE' })
    .then(setListings(listings.filter(listing => listing.id !==intID)));
  }
  function handleFormChange(value){
    setIntput(value)
    setListings(listings.filter(listing => listing.description.toLowerCase().includes(value.toLowerCase())))

  }
  return (
    <div className="app">
      <Header input={input} handleFormChange={handleFormChange}/>
      <ListingsContainer listings={listings} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
