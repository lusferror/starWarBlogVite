import { useEffect, useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Context } from "../store";
//import { getParamSW } from "../helpers";

export const PeoplePage = () => {
  const { store, actions } = useContext(Context);
  const { name, id ,url} = useParams();
  {
    /*  const data_ = getParamSW(props)*/
  }
  console.log("soy detalle de people", store.people);
  {
    /*if(!data_){
    return <Navigate to="/" />
  }*/
  }
  return (
    <div className="container">
    <div className="row mt-5">
      <div className="col-4 auto">
      <img 
      src={`/assets/img/people/people-${id}_${name}.jpg`}
      alt={name}
      className="img-thumbnail"
      />
      {url} {name}
      </div>
      <div className="col-8 auto">
      <h2>aqui van detalles</h2>
      </div>
    </div>
    </div>
  )
}
