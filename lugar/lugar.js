const axios = require('axios');

const getCoordenadas = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '1085cac1c3msh47e0b7f0a1de1c4p1b4299jsn27a08b04be2e'
        }
    });

   
    const resp = await instance.get()

    if ( resp.data.Results.length === 0 ) {
        throw new Error(`La busqueda no encontró resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const ciudad  = data.name;
    const lat  = data.lat;
    const lon  = data.lon;

    return {
        ciudad,
        lat,
        lon
    }

}

module.exports = {
    getCoordenadas
}