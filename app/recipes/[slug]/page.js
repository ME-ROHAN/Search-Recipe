"use client";
import Recipeitems from "@/components/Recipeitems";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Page({ params }) {
  useEffect(() => {
    if (params.slug) {
      apsi();
    }
  }, [params.slug]);

  const [recipedetail, setrecipedetail] = useState(null);

  const apsi = async () => {
    let response = await fetch(
      `https://forkify-api.herokuapp.com/api/get?rId=${params.slug}`
    );
    let data = await response.json();
    setrecipedetail(data.recipe);
    console.log(data);
  };
  if (!recipedetail) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-screen flex ">
      <div className="flex w-1/2 flex-col pl-48 gap-16 mt-10">
        <Link href="/recipes">
          <button className=" px-3 py-2 rounded-sm bg-yellow-600 hover:bg-yellow-800">Back ro recipe list</button>
        </Link>
        <img src={recipedetail.image_url} alt="" />
      </div>
      <div className="w-1/2 flex flex-col ml-24 gap-8 mt-10">
        <h1 className="text-xl font-bold">{recipedetail.title}</h1>
       <h3 className="text-sm text-gray-500"> Provided By {recipedetail.publisher}</h3>
        
    <div>
        <Link href={recipedetail.publisher_url} target="#"> <button className=" px-3 py-2 rounded-sm bg-blue-600 hover:bg-blue-800">Publisher Webpage</button></Link>
        <Link href={recipedetail.source_url} target="#"> <button className=" px-3 py-2 rounded-sm bg-green-600 hover:bg-green-800">Recipe URL</button> </Link> 
    </div>
     
        <h1 className="text-2xl font-bold">Ingredients</h1>
        <div className="flex flex-col border-2 border-gray-500 border-solid w-3/4">
            {recipedetail.ingredients.map((item,index)=>(
              <div className="border-2 pl-3 py-2 border-gray-500 border-solid">{item}</div>
            ))}
        </div>
      </div>
    </div>
  );
}
