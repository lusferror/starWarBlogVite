import React from 'react'
import { injectContext } from '../starwars';
import { Route,Routes, Navigate } from 'react-router-dom';
import { StarHeader } from '../starwars';
import { BrowserRouter } from 'react-router-dom';
import { NavBar_sw } from '../starwars';
import { StarwarsRoutes } from '../starwars';
import { PeoplesPage,PlanetsPage,VehiclesPage } from '../starwars/pages';
import { PeoplePage,PlanetPage,VehiclePage } from '../starwars/components';

const AppRouter = () => {
  
  return (
    <>
        <BrowserRouter>
          <React.StrictMode>
            <StarHeader />
            <Routes>
              <Route path ="/*" element={<StarwarsRoutes />}/>
              <Route path="/" element ={<Navigate to="/not-found"/>}/>
            </Routes>
          </React.StrictMode>
        </BrowserRouter> 
    </>
  )
}
export default injectContext(AppRouter);