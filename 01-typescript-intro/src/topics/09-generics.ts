
// Vamos a crear una función a la que vamos a pasar un argumento, pero no sabemos de que 
// tipo va a ser ese argumento. Para ello usamos usamos <T> esto lo transforma en una
// función genérica
// Con esto decimos que la función va a ser de tipo T el argumento que va recibir va a aser 
// de tipo T y el retorno también va a ser de tipo T
function whatsMyType<T> ( argument: T ): T {
    return argument;
}
// Ahora TypeScript infiere el tipo de dato que es por el argumento recibido
let amIString = whatsMyType('Hola mundo');
// let amIString: string
// function whatsMyType<"Hola mundo">(argument: "Hola mundo"): "Hola mundo"

let amINumber = whatsMyType(100);
// let amINumber: number
// function whatsMyType<100>(argument: 100): 100

let amIArray = whatsMyType([1, 2, 3, 4, 5]);
//let amIArray: number[]
// function whatsMyType<number[]>(argument: number[]): number[]

// Ahora podemos usar los métodos de cada uno de los tipos de datos
console.log( amIString.split(' ') );
console.log( amINumber.toFixed() );
console.log( amIArray.join('-') );

// Otra manera de hacerlo sería decirle explícitamente el tipo de dato
let amIString1 = whatsMyType<string>('Hola mundo');
// function whatsMyType<string>(argument: string): string
let amINumber1 = whatsMyType<number>(100);
// function whatsMyType<number>(argument: number): number
let amIArray1 = whatsMyType<number[]>([1, 2, 3, 4, 5]);
// function whatsMyType<number[]>(argument: number[]): number[]

console.log( amIString1.split(' ') );
console.log( amINumber1.toFixed() );
console.log( amIArray1.join('-') );