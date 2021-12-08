import { useState } from "react"
import Shoppingcard from "../home/Shoppingcard"
type PropsType=any|Function
const Navbar = ({productId,setremove}:PropsType) => {
    const [click, setclick] = useState<boolean>(false)
    return (
        <>
            <div className="container-fluid position-fixed navbar-light bg-light nav">
               <div className="container d-flex justify-content-between align-items-center py-4">
               <div>
                    <img src="./img/logo.png" width='140' alt="" />
                </div>
                <div className="nav-other">
                <i onClick={()=>setclick(true)} className="fas common-color  fa-2x fa-shopping-bag position-relative">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning p-2">{productId.length}<span className="visually-hidden"></span></span>

                </i>
                <i className="far common-color mx-4 fa-2x fa-heart"></i>
                <i className="far common-color fa-2x fa-user"></i>
                </div>
               </div>
            </div>
        <div className={click?"overlay-container d-block":"overlay-container "}>
           <div className="shopping-component">
                <Shoppingcard productId={productId} setremove={setremove} setclick={setclick} />
            </div>
           </div>
            
        </>
    )
}

export default Navbar
