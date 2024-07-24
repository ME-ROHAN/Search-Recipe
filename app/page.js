import Image from "next/image";
import Link from "next/link";
export default function Home() {
  
  


  return (
    
    <>

      <div className=" flex flex-col items-center justify-center gap-10 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/img/wooden-table-food-top-view-cafe-102532611.webp')] bg-cover h-[910px] w-screen ">
     
     
        {/* <Image height={10110} width={10110} src="/img/wooden-table-food-top-view-cafe-102532611.webp" alt="" />
        <img  src="/img/206356950-family-praying-before-dinner-in-thanksgiving-dinner-ai-generated.jpg" alt="" />
        <Image height={5000} width={5000} src="/img/206356950-family-praying-before-dinner-in-thanksgiving-dinner-ai-generated.jpg" alt="" /> */}
          <h1 className="text-white text-9xl font-bold tracking-widest" >OUR RECIPES</h1>
         <Link href="/recipes"> <button className="h-16 bg-blue-600 px-10 rounded-md text-lg hover:bg-blue-500 ">SEARCH RECIPES</button>
       </Link></div>
   
    </>
     
  );
}
