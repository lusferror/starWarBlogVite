import { useEffect, useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Context } from "../store";
//import { getParamSW } from "../helpers";

export const VehiclePage = () => {
  const { store, actions } = useContext(Context);
  const { name, id ,url} = useParams();
  {
    /*  const data_ = getParamSW(props)*/
  }
  console.log("soy detalle de vehicle", store.vehicles);
  {
    /*if(!data_){
    return <Navigate to="/" />
  }*/
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
      <img 
      src={`/assets/img/vehicles/vehicle-${id}_${name}.jpg`}
      alt={name}
      className="img-thumbnail"
      />
      {url} {name}
      </div>
    </div>
  )
}
