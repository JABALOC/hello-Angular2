// En javaScript para definir una función tradicional ponemos:
// function addNumbers(a, b) {     //Parameter 'a' implicity has an 'any'
// }
// Si no ponemos el tipo de dato que van a ser los parámetros que reciba la función,
// esta los va a marcar como : any, cosa que es peligroso ya que any acepta cualquier 
// cosa sin dar señal de fallo en el código. Po eso es mejor siempre definir el tipo de dato

function addNumbers(a: number, b: number) {
    return a + b;
}
// Si ponemos el ratón encima de la función addNumbers no pone lo siguiente:
// function addNumbers(a: number, b: number): number
// Esto quiere decir que tiene que recibir dos números y devolver un numero

const result = addNumbers(1, 2)
// Por lo que si yo ahora creo una constante y llamo a la variable addNumber
// esta constante llamada result, aunque no se lo especifiquemos, también será de tipo
// number, ya que es lo que devuelve esta función //  const result: number

//si por ejemplo queremos que result sea un string ponemos
const result2 = addNumbers(3, 4).toString(); 
// Y hacemos la conversión a string

console.log({result}); // Ponemos {} para que lo imprima como objeto
console.log({result2});

// Función de flecha o Lambda function es igual que la otra 
const addNumbersArrow = (a: number, b: number) => {
    return a + b;
}

// Este caso es como el otro, recibe dos parámetros que son números y retorna números
// const addNumbersArrow: (a: number, b: number) => number
// Pero nosotros podríamos poner que retornase un string, esto en principio nos daría error
// pero usando `` o `${}` podríamos solucionarlo (mejor que toString()
const addNumbersArrow2 = (a: number, b: number):string => {
    return `${a + b}`;
}

const result3 = addNumbersArrow(3, 3);  // const result3: number
const result4 = addNumbersArrow2(3, 3);  // const result4: string

console.log({result3});
console.log({result4});

// Creamos una función que va a recibir obligatoriamente un primer número
// Un segundo número opcional y que la base, si no la recibe, le asigna una 
function multiply(firstNumber: number, seconNumber?: number, base: number = 2) {
    return firstNumber * base;
}

const result5 = multiply(6);
console.log({result5});

// Creamos una arrowFunction en la que vamos a pasar como parámetro un dato llamado 
// character, que de momento no sabemos de que tipo es y otro que va a ser amount.
// amount sí que sabemos que va a ser de tipo number.
// Pero si no ponemos el tipo de dato, no pondrá que es de tipo any y eso no lo queremos.
// por lo que creamos una interface para este dato
/*
const healCharacter = (character, amount: number) => {

    character.pv += amount;

}*/

interface Character {
    name: string;
    hp: number;
    // La manera de definir una función dentro de uan interface es la siguiente
    showHp: () => void;
    // primero el nombre de la propiedad: tipo, en este caso el tipo es una arrowFunction
    // y la flecha => number el tipo de retorno (puede ser un string, boolean, number...)
}

// ahora volvemos a crear la función y ya sabemos que el tipo que queremos que tenga 
// character sea la interfaz Character ahora este parámetro tiene que cumplir la interface
// tiene que tener por lo menos name, hp, showHp
const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}


// Creamos un personaje que también tiene la interface de Character, por lo que 
// tiene que tener al menos las caracteristicas de la interface
const aragorn: Character = {
    name: 'Aragorn',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    }
}
console.log(aragorn.name);
aragorn.showHp();

// Ahora llamamos a healCharacter para curar a Aragorn
// la función nos pide un parámetro de tipo character y un número
healCharacter(aragorn, 10);
aragorn.showHp();


 