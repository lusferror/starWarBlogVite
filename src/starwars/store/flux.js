import {useEffect} from 'react';
const getState = ({ getStore, getActions, setStore }) => {
  return {
      store: {
          people: null,
          planet: null,
          planets: null,
          vehicle: null,
          vehicles: null,
          detallev:null,
          favorites: [],
          llaves:[],
      },
      actions: {
          getPeople: async (url, options = {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              }
          }) => {
              try {
                  const response = await fetch(url, options);
                  if (response.status !== 200) {
                      throw new Error({ message: 'Error fetching Characters.' })
                  }
                  const data = await response.json();
                  setStore({
                      people: data
                  });
              } catch (error) {
                  setStore({
                      error: error.message
                  });
              }
          },
          getPlanets: async (url, options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }) => {
            try {
                const response = await fetch(url, options);
                if (response.status !== 200) throw new Error("Error fetching Planet");
                const data = await response.json();
                setStore({
                    planets: data
                });
            } catch (error) {
                setStore({
                    error: error.message
                })
            }
        },
        
        getPlanet: async (url, options = {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              }
          }) => {
              try {
                  const response = await fetch(url, options);
                  if (response.status !== 200) throw new Error("Error fetching Planet");
                  const data = await response.json();
                  setStore({
                      planet: data
                  });
              } catch (error) {
                  setStore({
                      error: error.message
                  })
              }
          },
          getVehicles: async (url, options = {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              }
          }) => {
              try {
                  const response = await fetch(url, options);
                  if (response.status !== 200) throw new Error("Error fetching Vehicle");
                  const data = await response.json();
                  setStore({
                      vehicles: data
                  })
              } catch (error) {
                  setStore({
                      error: error.message
                  })
              }
          },
          getVehicle: (id)=>{
            useEffect(()=>{
                let urlVeh = `https://www.swapi.tech/api/vehicles/${id}`
                fetch(urlVeh)
                .then(data =>data.json())
                .then(lectura =>{
                  setStore({detallev:lectura.result.properties})
                  const { detallev } = getStore()
                  setStore({llaves : Object.keys(detallev)})
                })
                .catch((e)=>console.error(e))
              },[])
         },
         almacenar_favorito:(name)=>{
            const {favorites}=getStore();
            setStore({favorites:[...favorites,name]})
            console.log("Favoritos: ",getStore().favorites)
         }
          
      }
  }
}

export default getState;
