
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {Context} from '../../store/appContext';
import {useContext,useState} from 'react';

export const NavBar_sw = () => {
   
const logo =`/assets/img/logo.png`;
// const navigate = useNavigate()
const [favoritos,setFavoritos]= useState([])

const onForward =()=>{
    console.log("aqui guardo favoritos")
}

    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-2 btn btn-dark">
            
            <Link className= "navbar-brand" to="/"><img className='logo' src={logo} alt="logo 1" /></Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink className={({isActive})=>` nav-link ${isActive ? 'active' : ''}`}
                        to="/people" >
                        Peoples
                    </NavLink>
                    
                   <NavLink className={({isActive})=>` nav-link ${isActive ? 'active' : ''}`}
                        to="/planet">
                        Planets
                    </NavLink>
                   

                    <NavLink className={({isActive})=>` nav-link ${isActive ? 'active' : ''}`}
                        to="/vehicle">
                        Vehicles
                    </NavLink>

                    <NavLink className={({isActive})=>` nav-link ${isActive ? 'active' : ''}`}
                        to="/*">
                        Spices
                    </NavLink>
                   
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info"> 
                        
                        Elsa
                    </span>

                    <button 
                        className="nav-item nav-link btn"
                      
                     onClick={onForward}
                    > 
                        Favoritos
                    </button>
                </ul>
            </div>
        </nav>
        </>
)}
