import React from 'react';

export const StarwPage1 = ({
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    homeworld,
    mass,
    name,
    skin_color,
    url,
    uid
}) => {
  return (
    <div className='card '>
      <div className='card-body'>
        <div className='row'>
                <div className='col-8 d-block'>
                <p className='card-text'>{name}</p>
                <p className='card-text'>{birth_year}</p>
                <p className='card-text'>{eye_color}</p>
                <p className='card-text'>{gender}</p>
                <p className='card-text'>{hair_color}</p>
                <p className='card-text'>{height}</p>
                <p className='card-text'>{mass}</p>
                <p className='card-text'>{skin_color}</p>
            </div>

        </div>

      </div>
    </div>
  );
}

export default StarwPage1;
