import React, { useEffect, useState } from 'react'
import MealCard from './MealCard'

type IntailDataType={
    strMeal:string,
    strMealThumb:string,
    idMeal:string
}[]

type PropsType={
    productId:Function |[],
    setproductId:Function 
}
const Header = (props:PropsType) => {
    const [isLoding, setisLoding] = useState<boolean>(false)
    const [url, seturl] = useState<string>('https://www.themealdb.com/api/json/v1/1/search.php?s=beef')
    const [intialData, setintialData] = useState<IntailDataType>([])
    useEffect(() => {
            const getMeal=async()=>{
                setisLoding(true)
                setintialData([])
               const data=await fetch(url) 
               const res= await data.json()
            //    console.log(res.meals)
               setintialData(res.meals.splice(5,4))
               setisLoding(false)

            }
            getMeal()
    }, [url])
    return (
        <>
            <div className="container pt-5">
              <div className="menu-container pt-5">
                  <h1 className="text-center common-color" >Our Best Meals<span className="common-color">.</span></h1>
                  <div className="text-center">
                      <button onClick={()=>seturl('https://www.themealdb.com/api/json/v1/1/search.php?s=beef')} className="header-btns">Beef</button>
                      <button onClick={()=>seturl('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')} className="header-btns active-btn">Chicken</button>
                      <button onClick={()=>seturl('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')} className="header-btns active-btn">Fish</button>
                      <button onClick={()=>seturl('https://www.themealdb.com/api/json/v1/1/search.php?s=lamb')} className="header-btns active-btn">Lamb</button>


                      <div className="container">
                              {
                                  isLoding?(<>
                                  <div className="spinner-border common-color" role="status">
                                     <span className="visually-hidden"></span>
                                   </div>
                                  </>):""
                              }
                          <div className="row m-0">
                            {
                                intialData.map((data)=><MealCard productId={props.productId} setproductId={props.setproductId} key={data.idMeal} data={data}/>)
                            }
                          </div>
                      </div>
                  </div>
              </div>

            </div>
            
        </>
    )
}

export default Header
