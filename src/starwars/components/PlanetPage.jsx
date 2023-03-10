import { useEffect, useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Context } from "../store";
//import { getParamSW } from "../helpers";

export const PlanetPage = () => {
  const { store, actions } = useContext(Context);
  const { name, id ,url} = useParams();
  {
    /*  const data_ = getParamSW(props)*/
  }
  console.log("soy detalle de planets", store.planets);
  {
    /*if(!data_){
    return <Navigate to="/" />
  }*/
  }
  return (
    <div className="container">
    <div className="row mt-5">
      <div className="col-4">
      <img 
      src={`/assets/img/planets/planet-${id}_${name}.jpg`}
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
/**
 * import {Navigate, useParams } from "react-router-dom"
import { getParamSW } from "../helpers";

export const PlanetPage = () => {
  const { id }= useParams();
  const data_ = getParamSW(id)
  {if(!data_){
    return <Navigate to="/planet" />
  }}
  return (
    <div className="row mt-5">
      <div className="col-4">
      <img 
      src={`/assets/img/${data_.publicado}-${data_.uid}_${data_.name}.jpg`}
      alt={data_.name}
      className="img-thumbnail"
      />
      </div>
    </div>
  )
}
 */