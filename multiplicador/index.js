const fs = require('fs');
const {logica} = require('./logica');
const multiplicar = (base, limite,visualizar) => {

    const result = logica(base, limite);
    if(visualizar) {
        console.log('=========================');
        console.log(`\tTabla del ${base}`);   
        console.log('=========================');
        console.log(result);
    }
    
    const nameFile = `tabla-del-${base}.txt`;

    fs.writeFile(`tablas/${nameFile}`, result, (err) => {
        if(err) throw err;
        console.log(`El archivo ${nameFile} fue creado!`);
    });
}

module.exports = {
    multiplicar
}