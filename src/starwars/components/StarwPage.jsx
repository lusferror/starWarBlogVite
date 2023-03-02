import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store";
//import { getParamSW } from "../helpers";
import StarwPage1 from "../pages/StarwPage1";

export const StarwPage = () => {
  useEffect(() => {
    //    //state.actions.getPeople();
         actions.getPeopleD(id);
       //  actions.setStore = peopled;
     //   console.log("useffect detalle_people", actions.getPeopleD(id))
    //   // state.actions.getVehicles();
    },[]);
  const { store, actions } = useContext(Context);
  const { name, id ,url} = useParams();

console.log("soy store2 desde pag detalle de people", store);
 return (
    <div className="row mt-2 w-100">
      <div className="col-4">
        <img
          src={`/assets/img/people/people-${id}_${name}.jpg`}
          alt={name}
          className="img-thumbnail"
        /></div>
        <div className="card col-8 d-block w-50">
        <h1>Caracteristicas:</h1>
        {/*<h3 className="card-text"><strong>Name:{" "}</strong>
          {store.peopled.result.properties.name}</h3>
        <h3 className="card-text"><strong>Birth:{" "}</strong>
        {store.peopled.result.properties.birth_year}</h3>
        <h3 className="card-text"><strong>Eyes:{" "}</strong>
          {store.peopled.result.properties.eye_color}</h3>
          <h3 className="card-text"><strong>Gender:{" "}</strong>
          {store.peopled.result.properties.gender}</h3>  
          <h3 className="card-text"><strong>Hair:{" "}</strong>
          {store.peopled.result.properties.hair_color}</h3> 
          <h3 className="card-text"><strong>Height:{" "}</strong>
          {store.peopled.result.properties.height}</h3>
          <h3 className="card-text"><strong>Mass:{" "}</strong>
          {store.peopled.result.properties.mass}</h3>
          <h3 className="card-text"><strong>Skin:{" "}</strong>
          {store.peopled.result.properties.skin_color}</h3>   */}              
          {/*{store.peopled.result.properties.map(elem =>(*/}
            {store.peopled.result.filter(({elem}) =>(
            <StarwPage1 
            key={elem.uid}
            {...elem}
            />
          ))}
          
         
        </div>
      </div>
  );
};
