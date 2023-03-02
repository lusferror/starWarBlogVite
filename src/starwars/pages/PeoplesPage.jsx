import React,{useContext} from 'react'
import { StarwList } from '../components';
import { Context } from '../store';

export const PeoplesPage = () => {
  const{store,actions} = useContext(Context);
  return (
    <>
      <StarwList people={store.people}/>
  
    </>
  )
}
