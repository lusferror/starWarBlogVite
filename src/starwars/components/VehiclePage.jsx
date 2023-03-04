import { useEffect, useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Context } from "../store";
//import { getParamSW } from "../helpers";

export const VehiclePage = () => {
  const { store, actions } = useContext(Context);
  const { name, id, url } = useParams();

  const { detallev , llaves } = store
  const { getVehicle } = actions
  getVehicle(id);

  if (detallev) {
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
            <h2>Detalles</h2>
            <table>
              { llaves.map(key=>
              <tr>
                <td className="col-6 text-white">{key}: </td>
                <td className="text-warning">{detallev[key]}</td>
              </tr>
                )}

            </table>

          </div>

        </div>
      </div>
    )

  }
  else {
    return (
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    )
  }
}
