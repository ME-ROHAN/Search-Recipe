import React from 'react'

const Search = () => {
    const aps = async()=>{

        let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
        let data = await response.json();
        console.log(data)
  
  
  
    }
  const handleclick=()=>{
      aps()
      }
  
    return (
      
      <>
  
      <button onClick={handleclick} >click me</button>
      </>
       
    );
  }


export default Search
