import React from 'react'
import { NavBar_sw } from '../ui';
import { PeoplesPage,PlanetsPage,VehiclesPage } from '../pages';
import { PeoplePage,PlanetPage,VehiclePage } from '../components';
import { Routes,Route } from 'react-router-dom';

export const StarwarsRoutes = () => {
  
  return (
    <>
    
    <NavBar_sw />
    <div className='container'>
    <Routes>
        <Route path="people" element={<PeoplesPage />}/>
        <Route path="planet" element ={<PlanetsPage/>}/>
        <Route path="vehicle" element ={<VehiclesPage/>}/>
        <Route path="*" element ={<h1>Not Found</h1>}/>
 
        <Route path ="people/people/:name/:id" element={<PeoplePage/>}/>
        
        <Route path ="planet/planet/:name/:id" element={<PlanetPage/>}/>
        
        <Route path ="vehicle/vehicle/:name/:id" element={<VehiclePage/>}/>
        
           </Routes>
    
    </div>
   
    </>
  )
}
