"use client"
import  {useState,useEffect } from "react"
export default function Home()
{
    const [count,setCount]=useState(0)
    return(
        <div>
            i am component {count}
            <button onClick={()=>setCount(count+1)}>Click Me</button> 
        </div>
    )
}