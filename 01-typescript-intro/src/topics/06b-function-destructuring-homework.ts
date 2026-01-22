export interface Product {
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

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// Sabemos que nuestra función tiene que devolver una tupla de number[], number[], 
// por lo que es mejor especificarselo directamente para que retorne eso.
//function taxCalculation( options: TaxCalculationOptions ): [number, number] {

// También podemos destructurar options y poner directamente {tax, products}
//function taxCalculation( {products, tax}: TaxCalculationOptions ): [number, number] {

// Pero esta no es la mejor opción ya que podríamos tener muchos argumentos 
// y una mejor manera de hacerlo es destructurar options dentro de la función
export function taxCalculation( options: TaxCalculationOptions ): [number, number] {

    const {products} = options;
    const {tax} = options;

    let total = 0;

    // Aquí solo nos interesa el precio, por lo que podemos destructurar de esta manera:
    products.forEach( ({price}) => {
        total += price;
    })
  
    return [total, total * tax];
}

const shopingCart: Product[] = [phone, tablet];
const tax: number = 0.15;

// Podemos hacer destructuración aquí para que no tengamos que imprimir result[]
// Metemos en un array products y tax
const [products, taxTotal] = taxCalculation({
    products: shopingCart,
    tax, 
});


console.log('Total: ',products);
console.log('Tax: ',taxTotal);
