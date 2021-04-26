const logica = (base, limite) => {
    let result = '';

    for(let i = 1; i <= limite; i++) {
        result += `${base} * ${i} = ${base * i}\n`;
    }
    return result;
}

module.exports = {
    logica
}