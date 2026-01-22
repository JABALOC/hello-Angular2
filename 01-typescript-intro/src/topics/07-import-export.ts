
// Esto también pueden ser módulos

// Creamos otra vez una constante en la que decimos que va a ser de tipo Product, 
// como en el ejercicio anterior, y que esta va a ser un array
// Pero en lugar de volver a crear la interface Product en este fichero, la exportamos 
// en el fichero anterior y la importamos en este.

// La manera de importar un archivo de otra parte es así:
// Hacemos una destructuración from './el-archivo-desde-el-que-se-importa'
// Una manera de completar rápidamente el autocompletado a la hora de importar el archivo 
// es pulsando ctrl + espacio
// Y luego pinchamos en los {} y pulsamos ctrl + espacio para que nos aparezca lo que 
// podemos importar
// Las interfaces de TypeScript se importan con import type cuando verbatimModuleSyntax
// está habilitado 
import type { Product } from './06b-function-destructuring-homework'
import {taxCalculation} from './06b-function-destructuring-homework'

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100,
    },
    {
        description: 'iPad',
        price: 150,
    },
];

// Nos pide que importemos la función taxCalculation 
// Si pulsamos ctrl y ponemos el ratón encima de la función, nos indica que necesita esta 
// función.
// En este caso esta función tiene que recibir un objeto llamado options que es de tipo
// TaxCalculationOptions, por lo que si pinchamos en ctrl y pinchamos en la función, nos 
// lleva a la función que hemos exportado. En esta función podemos pinchar también en 
// TaxCalculationOptions y nos lleva al interface en el que vemos que lo que tenemos que 
// poner es:
/*interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}*/
// una variable de tipo number y otra de tipo array. La variable de tipo array la 
// hemos definido arriba y la de tipo number la hemos iniciado directamente dentro 
// de la función
const [ total, tax ] = taxCalculation({
    products: shoppingCart, 
    tax: 0.15
});

console.log('Total: ', total);
console.log('Tax: ', tax);

