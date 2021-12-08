import React from 'react'
type stateType={

}[]
const List = ({data,setremove}:any) => {
    console.log(data)
    return (
        <>
            <div className="col-lg-12 ">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={data.strMealThumb} width="150" className="img-fluid rounded-start h-100" alt="..."/>
                </div>
              <div className="col-md-8">
            <div className="card-body">
                <strong className="card-title">{data.strMeal}</strong>
                <h6>10$</h6>
                <button onClick={()=>setremove(data.idMeal)} className="trash-btn"><i className="fas fa-trash"></i></button>

           </div>
          </div>
          </div>
          </div>
            </div>
        </>
    )
}

export default List
