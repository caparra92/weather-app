const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/* lugar.getCoordenadas(argv.direccion)
        .then( resp => {
            console.log(resp);
        })
        .catch( err => {
            console.log(err);
        }); */
/* clima.getClima('1.210000', '-77.279999')
        .then(console.log)
        .catch(console.log); */

const getInfo = async( direccion ) => {
    
    try {
        const coordenadas = await lugar.getCoordenadas( direccion );
        const clm = await clima.getClima(coordenadas.lat, coordenadas.lon);  

        return `El clima en ${ coordenadas.ciudad } es de ${ clm } grados Centigrados`; 
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
                           
}

getInfo(argv.direccion)
    .then( resp => {
        console.log(resp);
    })
    .catch(console.log);


