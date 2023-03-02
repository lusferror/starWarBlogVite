import React from 'react'
import { injectContext, StarwarsRoutes } from '../starwars';
import { Navigate, Route,Routes } from 'react-router-dom'
import { StarHeader } from '../starwars';
import { BrowserRouter } from 'react-router-dom';

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