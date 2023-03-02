
//import { getStore } from '../helpers';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import { PlanetCard } from './';

export const PlanetList = (...props) => {
   // const store2 =getStore(publicado);
    const { store, actions } = useContext(Context);
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {store.planets.results.map(stor =>(
            <PlanetCard
            key={stor.uid}
            {...stor}
            />
        ))}
    </div>
  )
}