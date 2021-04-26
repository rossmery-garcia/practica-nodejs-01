const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Marta'
    },
    {
        id: 3,
        nombre: 'Manuel'
    }
];
const sueldos = [
    {
        id: 1,
        sueldo: 1500
    },
    {
        id: 2,
        sueldo: 2000
    }
];

//-- con callbacks --
/*const getEmpleadoById = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id);
    if(empleado) {
        callback(empleado);
    }

}*/

const getEmpleadoById = (id) => {

    return new Promise((resolve, reject) => {
        
        const empleado = empleados.find((e) => e.id === id);
        if(empleado) {
            resolve(empleado);
            return;
        }
        reject(`El empleado con id ${id} no existe`);
    });   
}

const getSuelById = (id) => {

    return new Promise((resolve, reject) => {
        
        const sueldo = sueldos.find((e) => e.id === id);
        if(sueldo) {
            resolve(sueldo);
            return;
        }
        reject(`El sueldo con id ${id} no existe`);
    });   
}

const id = 1;
let nombre;

//-- Una forma poco recomendada de resolverla pero que es correcta --
/*getEmpleadoById(id).then(empleado => {
    console.log(`El empleado con id ${id} es ${empleado.nombre}`);
    getSuelById(id).then(sueldo => {
        console.log(`El empleado con id ${id} es ${empleado.nombre}`);
    }).catch(error => {
        console.log(error);
    })
}).catch(error => {
    console.log(error);
});*/

getEmpleadoById(id)
    .then(empleado => {
        nombre = empleado.nombre;
        return getSuelById(id);
    })

    .then(sueldo => {
        console.log(`El empleado ${nombre} tiene un sueldo de ${sueldo.sueldo}`);
    })

    .catch(error => console.log(error))