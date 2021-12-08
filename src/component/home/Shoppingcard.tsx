import React from 'react'
import List from './List'
type Propsvalue={
    setclick:Function,
    productId:[],
    setremove:Function
}
type Data={
    data?:string
}
type Props={
    props: Propsvalue|Data
}
const Shoppingcard = ({setclick,productId,setremove}:Propsvalue) => {
    // const {setclick}=props
    console.log(productId)
    return (
        <>
        <div className="container">
            <div className="d-flex justify-content-between">
                <div>
                <i onClick={()=>setclick(false)} className="fas text-white fa-2x fa-times"></i>
                </div>
                <div className="me-5">
                    <h4 className="pe-5 text-white">Shopping Card</h4>
                </div>
            </div>
            <div className="row m-0 py-5">
                <div className={productId.length===0?"col-lg-12 mt-5":'d-none'}>
                    <img src="./img/undraw_empty_cart_co35.svg" className=" img-fluid" alt="" />
                    <h1 className="text-center text-white">Empty Card</h1>
                </div>
                    {productId.map((data)=><List key={data} setremove={setremove} data={data}></List>)}
                {/* <List productId={productId}/> */}
            </div>
        </div>
            
        </>
    )
}

export default Shoppingcard
