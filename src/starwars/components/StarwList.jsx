
//import { getStore } from '../helpers'
import { useContext, useState } from 'react';
import { Context } from '../store/appContext';
//import {Pagination} from 'react-js-pagination';
import { StarwCard } from './StarwCard';

export const StarwList = (...props) => {
  //const store1 =getStore(publicado)
  const { store, actions } = useContext(Context);
  //const { people } = store;
  //const [page, setPage] = useState(1);
  //store.people.results.map()
  // console.log("soy store people",store)
  if (store.people) {
    return (
      <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {store.people.results.map((stor, index) => (
          <StarwCard
            key={stor.uid}
            {...stor}
            index={index}
          />
        ))}
      </div>
    )

  }
  else {
    return(
    <>
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
    )
  }
}
