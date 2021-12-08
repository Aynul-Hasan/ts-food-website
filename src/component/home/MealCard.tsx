import React from 'react'
type IntailDataType={
  data:{
    strMeal:string,
    strMealThumb:string,
    idMeal:string
  },
 productId:Function|any,
 setproductId:Function
}
const MealCard = ({data,productId,setproductId}:IntailDataType) => {
   
    const getMealID=(data:object)=>{
            
            setproductId([...productId,data])
    }
    // console.log(props)
    return (
        <>
            <div className="col-lg-3">
            <div className="card border-0  position-relative">
                <div>
                <img src={data.strMealThumb} className=" w-100" width="250" alt="..."/>
                </div>
                <div className="card-bodys text-white text-center">
                    <h5 className="card-title">{data.strMeal}</h5>
                    <h6>10$</h6>
                    <button onClick={()=>getMealID(data)} className="card-btns">Add to Card</button>
                </div>
                
                </div>
            </div>
        </>
    )
}

export default MealCard
