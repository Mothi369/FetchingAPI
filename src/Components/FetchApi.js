import React, { useEffect, useState } from 'react'
import DisplayApi from './DisplayApi'

const FetchApi = () => {

    const [product,setProduct]=useState([])

    useEffect(()=>{
        const fetchData= async()=>{
            const url="https://fakestoreapi.com/products"
            const res= await fetch(url)
            const data=await res.json()
            setProduct(data)
        }
        fetchData()

    },[])

  return   product.map(ele=> <DisplayApi  key={ele.id} data={ele} />) 
  
}

export default FetchApi