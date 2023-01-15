import React from 'react'
import { useState, useEffect, CSSProperties } from "react";
import CircleLoader from "react-spinners/CircleLoader";






export default function Loader() {
    let [color, setColor] = useState("#ffffff");

    const [loading, setLoading] = useState(false)
    useEffect(()=> {
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div>
    
        
        <CircleLoader
          color={"#01d293"}
          loading={loading}
        
          size={150}
        />
        
      
    </div>
  )
}


