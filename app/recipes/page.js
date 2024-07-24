"use client"
import React from 'react'
import { useState,useEffect } from 'react'
import Recipeitems from '@/components/Recipeitems'
const page = () => {
    const [ingre, setingre] = useState("")
    const [fineingre, setfineingre] = useState("pizza")
    const changeHandle = (e)=>{
        setingre(e.target.value)
    }
  
      const clickHandle = ()=>{
          setfineingre(ingre)

      }     
    return (
      <div className='flex flex-col gap-10 h-full w-screen justify-center items-center'>
        <h1  className='mt-10 text-3xl'>Search Recipes With <span className='text-blue-500'>Our Recipes</span></h1>
        <h3>Input Recipes Separated By Comma</h3>
  
        
        <div className='-mt-7 w-screen flex justify-center  '>
          <input className='focus:outline-none w-2/6 pl-5 h-10 text-black' type="text" placeholder='tomato,potato,pizza' onChange={changeHandle}/>
        <button onClick={clickHandle} className='border-solid border-white border-2 px-4 hover:bg-gray-700'><img src="/search.svg" alt="s" /></button>
        </div>
        <h1>RECIPE LIST FOR: {fineingre}</h1>
  
        <Recipeitems ingre={fineingre} ></Recipeitems>
      </div>
    )
}

export default page
