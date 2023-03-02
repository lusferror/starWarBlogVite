import React from 'react';
import { Link } from 'react-router-dom';

export const PlanetCard = ({uid,
    name,
    url,
    description,
    id
    }) => {
    
        const starImgUrl =`/assets/img/planets/planet-${uid}_${name}.jpg`;
        const caracteristicas=()=>{
          console.log("te envio a su descripcion")
        }
        const almacenar_favorito=()=>{
        //  console.log("aqui guardo cada imagen clickeada")
        }
        return (
           <div className='container my-1 mt-4'>
            <div className='card'>
                <div className='row g-2'>
                    <div className='col-6'>
                        <img src={starImgUrl} className='card-img' alt={name} />
                    </div>
                    <div className='col-6'>
                      <div className='card-body'>
                          <h5 className='card-title'>{name}</h5>
                          <p className='card-text'>{description}</p>
                      <Link to={`./planet/${name}/${uid}`}>
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
        


 