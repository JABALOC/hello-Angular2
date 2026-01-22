

interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Jorge'
}

const passenger2: Passenger = {
    name: 'Fernando',
    children: ['Natalia', 'Elizabeth'],
}

// creamos una ArrowFunction llamada printChildren que recibe un argumento de tipo Passenger
const printChildren = ( passenger: Passenger) => {
    // Le estamos diciendo que nos de el nombre del passenger y la cantidad de hijos
    // que estén dentro del array. En caso de no haber array, en lugar de devolver 
    // undefined, devuelve 0
    console.log(passenger.name, passenger.children?.length || 0);
    // Si en ligar de usar la interogacióin usasemos ! estariamos diciendo que sí o sí
    // va a recibir el array de children
}

printChildren(passenger2);
printChildren(passenger1);