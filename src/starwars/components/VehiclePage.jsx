import { useEffect, useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Context } from "../store";
//import { getParamSW } from "../helpers";

export const VehiclePage = () => {
  const { store, actions } = useContext(Context);
  const { name, id ,url} = useParams();
  const {detallev}=store
  const {getVehicle}=actions
  getVehicle()
  return (
    <div className="container">
    <div className="row mt-5">
      <div className="col-4">
      <img 
      src={`/assets/img/vehicles/vehicle-${id}_${name}.jpg`}
      alt={name}
      className="img-thumbnail"
      />
      {url} {name}
      </div>
      <div className="col-8 auto">
        <h2>aqui van detalles</h2>
       {detallev.model}
        {/*detallev.map((deta_v)=>{
          <div className="text-white" key={deta_v.url}>
            <h2>Modelo: {deta_v.model}</h2>
          <p>{deta_v.name}</p>
          </div>
        })*/}
        
      </div>

    </div>
    </div>
  )
}
