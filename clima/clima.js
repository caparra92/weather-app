const axios = require('axios');

const getClima = async(lat, lon) => {
    
  const resp =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=72c457dc81b53f8191f8d8dfe0dbb3aa&units=metric`);

  return resp.data.main.temp;
        
};

module.exports = {
    getClima
}