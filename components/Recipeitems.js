"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
const Recipeitems = ({ingre}) => {
  const [recipeitem, setrecipeitem] = useState([]);
  const [error, seterror] = useState(false)
  useEffect(() => {
    apicall();
    console.log(ingre)
  }, [ingre]);

  // useEffect(() => {
   
  //   // console.log({ingre})
    
  // })
  
  

  const apicall = async () => {
   seterror(false)
    try{
       let response = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${ingre}`
    );
    let data = await response.json();
    if (data.recipes && data.recipes.length > 0) {
      setrecipeitem(data.recipes);
    } else {
      setrecipeitem([]);
    }}
    catch(err){
      seterror(true)
    }
   
  };

  if (error || recipeitem.length === 0 ){
    return <div> No recipe Found</div>
  }
  return (
    <div className="w-4/5 gap-6  flex flex-wrap ">
       
        { recipeitem.map((items, index) => (
        <div className="w-1/5 ml-12  border-white border-2 bprder-solid h-[27rem] rounded-lg flex flex-col gap-4" key={index}>
         <img className="w-full h-2/4 rounded-lg" src={items.image_url} alt="" />
          <h1 className="text-xl  px-4 font-bold">{items.title}</h1>
          <h2 className=" px-4">{items.publisher}</h2>
          <hr className=" mx-4 bg-white"/>
          
          <div className="px-4 flex gap-2 justify-center">
            <Link href={`/recipes/${items.recipe_id}`}>
            <button className="full px-3 py-2 rounded-sm bg-blue-600 hover:bg-blue-800">Details</button>
          </Link>
          <Link href={items.source_url} target="#">
            <button  className="full px-3 py-2 rounded-sm bg-green-600 hover:bg-green-800">Recipe URL</button>
          </Link>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Recipeitems;
