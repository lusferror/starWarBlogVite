//import { getStore } from '../helpers';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import { VehicleCard } from './';

export const VehicleList = (...props) => {
    //const store1 =getStore(publicado);
    const { store, actions } = useContext(Context);
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {store.vehicles.results.map(stor =>(
            <VehicleCard
            key={stor.uid}
            {...stor}
            />
        ))}
    </div>
  )
}
