import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Header from './Header'
import SerchCon from './SerchCon'
type statetype=
    {
    idMeal:string,
    strMealThumb:string,
    strMeal:string,
    }[]|any
type dataType={
    idMeal:string
}

const Home = () => {
    // const [remove, setremove] = useState('')
    const [productId, setproductId] = useState<statetype>([])
    // console.log(remove)
    const setremove=(e:string)=>{
        console.log(e)
        const fil= productId.filter((data:dataType)=>data.idMeal!==e)
        // const d=[fil]
        setproductId(fil)
    }
    /*useEffect(() => {
        const res=()=>{
            const filter=productId.filter((data:any)=>data.idMeal!==remove)
            setproductId()
        }
        res()
    }, [remove])*/
    return (
        <>
        <Navbar productId={productId} setremove={setremove} />
        <Header productId={productId} setproductId={setproductId}/>
        <SerchCon productId={productId} setproductId={setproductId}/>
        </>
    )
}

export default Home
