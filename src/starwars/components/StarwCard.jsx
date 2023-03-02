import React from 'react';
import { Link } from 'react-router-dom';

export const StarwCard = ({uid,
name,
url,
description,
id
}) => {
/*export const StarwCard= ({
  people,characters,vehicle,vehicles,planet,planets,favoritos
})=>{*/
const starImgUrl =`/assets/img/people/people-${uid}_${name}.jpg`;
const caracteristicas=()=>{
 // console.log("te envio a su descripcion")
}
const almacenar_favorito=()=>{
 // console.log("aqui guardo cada imagen clickeada")
}
return (
   <div className='container my-2 mt-4'>
    <div className='card'>
        <div className='row g-2'>
            <div className='col-6'>
                <img src={starImgUrl} className='card-img' alt={name} />
            </div>
            <div className='col-6'>
              <div className='card-body'>
                  <h5 className='card-title'>{name}</h5>
                  <p className='card-text'>{description}</p>
              <Link to={`./people/${name}/${uid}`}>
                    Mas
              </Link>
              <div className='btn btn-secondary p-1'>
              <i className="fa-sharp fa-solid fa-heart"
                  onChange={almacenar_favorito()}></i>
              </div>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}
