export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

export function calcularMarca(marca){
    let incremento;

    switch(marca){
        case "Americano":
            incremento = 1.15
            break
        case "Europeo":
            incremento = 1.30
            break
        case "Asiatico":
            incremento = 1.05
            break
        default:
            break
    }

    return incremento
}

export function obtenerPlan(plan){
    return (plan === "basico") ? 1.20 : 1.50
}

//Función para hacer mayuscula la primer letra del texto que se le pase
export function HacerMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}