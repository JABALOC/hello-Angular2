// Creamos una interface de nombre product que va a definir los objetos de tipo Product
// Creamos dos objetos que son de tipo Product


interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0,
}

const tablet: Product = {
    description: "iPad Air",
    price: 250.0
}

// Creamos una función llamada taxCalculation():number que es de tipo number y que va a 
// recibir multiples parámetros.
// Cuando una función recibe más de dos parámetros, lo correcto es convertir esos 
// parámetros en un objeto y pasar a la función el objeto

// Al ser un objeto personalizado, lo correcto es crear una interface
// Este va a ser un objeto que va a tener el tax y el arreglo de productos
interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// Ahora vamos a decirle a la función que el parámetro options, tiene que ser de tipo
// TaxCalculationOptions, por lo que tiene que tener un tax y un array de productos
function taxCalculation( options: TaxCalculationOptions ): number[] {

    // Declaramos una variable total donde vamos a almacenar el precio de los productos
    let total = 0;

    // Del parámetro options coge el products (que es un array de la interface 
    // taxCalculationOptions) recorrelo con un forEach, guarda el resultado en la 
    // variable product y en el total suma total + product.price
    options.products.forEach( product => {
        total += product.price;
    })
    // Retornamos un array con el total * options.tax ya que el forEach nos va a dar 
    // varios resultados en función de los opbejos que tenga en en array
    return [total, total * options.tax];
}

// Creamos una constante que contiene una array de constantes y otra variable llamada tax
// que define el tipo de impuesto

const shopingCart: Product[] = [phone, tablet];
const tax: number = 0.15;

// Si ponemos el ratón encima de la función nos dice que parámetros espera recibir:
// function taxCalculation(options: TaxCalculationOptions): number[]
// En este caso nos pide un objeto que tiene que tener tax y products
// Para esto ponemos {}
const result = taxCalculation({
    products: shopingCart,
    tax, // En el caso de tax sería tax: tax, pero al ser el mismo nombre se puede omitir
});

console.log('Total: ',result[0]);
console.log('Tax: ',result[1]);
