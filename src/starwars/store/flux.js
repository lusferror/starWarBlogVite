const getState = ({ getStore, getActions, setStore }) => {
  return {
      store: {
          people: null,
          planet: null,
          planets: null,
          vehicle: null,
          vehicles: null,
          favorites: []
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
          getVehicle: async (url, options = {
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
                    vehicle: data
                })
            } catch (error) {
                setStore({
                    error: error.message
                })
            }
        },
          
      }
  }
}

export default getState;
