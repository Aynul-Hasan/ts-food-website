import React, { useState } from 'react'
import MealCard from './MealCard'
type IntailDataType={
    strMeal:string,
    strMealThumb:string,
    idMeal:string
}[]
type PorpsType={
    productId:Function|[],
    setproductId:Function
}
const SerchCon = (props:PorpsType) => {
    const [inputValue, setinputValue] = useState<string>('')
    const [intialData, setintialData] = useState<IntailDataType>([])
    const getMeal=async()=>{
            const getdata=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
            const res=await getdata.json()
            setintialData(res.meals)

    }
    return (
        <>
        <div className="container">
        <div className="text-center">
              <input  className="header-input-box" onChange={(e)=>setinputValue(e.target.value)} placeholder="Search your desire dishes" type="text" />
              <button  onClick={getMeal} className="header-input-btn"><i className="fas fa-utensils"></i></button>
        </div>
        <div className="row m-0 g-4">
            {       intialData.map((data)=><MealCard productId={props.productId} setproductId={props.setproductId} key={data.idMeal} data={data}/>)
        
        }
        </div>
        </div>
            
        </>
    )
}

export default SerchCon
