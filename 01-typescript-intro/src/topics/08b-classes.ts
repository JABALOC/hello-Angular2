class Person {
    public name: string;
    private address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}

const ironman = new Person('Ironman', 'New York');
console.log(ironman);


// Vamos a evitar tener la extensión de Person en Hero y para ello vamos a crear una 
// constante dentro de Hero llamada person que va a ser de tipo Person
export class Hero{

        public alterEgo: string;
        public age: number;
        public realName: string;

        // Se puede inicializar aquí pero lo vamos a hacer en el contructor
        public person: Person

    constructor(alterEgo: string, age: number, realName: string) {
        
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;

        this.person = new Person(realName, 'New York');
        // El problema de hacerlo así es que tenemos la clase person dentro de la clase 
        // Hero, si la clase Person se modificase, la clase Hero se vería afectada
        // La manera de hacer esto sería instanciar la clase Person fuera de la clase Hero
        // Vamos a hacerlo en la clase SuperHero 
    }
}

const capitanAmerica = new Hero('Capitán América', 115, 'Steve Rogers');
console.log(capitanAmerica);

// Creamos la constante Tony y dentro de la clase Hero, en el constructor la inicializamos
class SuperHero {
        public alterEgo: string;
        public age: number;
        public realName: string;
        public person: Person;

        constructor(alterEgo: string, age: number, realName: string, person: Person) {
        
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;
        this.person = person;
        }
}

// redRichards es de tipo Person y pide dos propiedades, name y address
const redRichads = new Person('Red Richads', 'New York');
// mrFantastic es de tipo SuperHero y pide cuatro propiedades constructor SuperHero 
// (alterEgo: string, age: number, realName: string, person: Person): SuperHero
const mrFantastic = new SuperHero('Mr Fantastic', 43, 'Red Richards', redRichads)
console.log(mrFantastic);
/*
SuperHero {alterEgo: 'Mr Fantastic', age: 43, realName: 'Red Richards', person: Person}
age:43
alterEgo:"Mr Fantastic"
person: Person {name: 'Red Richads', address: 'New York'}
realName:"Red Richards"
*/

// Si ahora cambiasemos la clase Hero, la clase SuperHero no se vería afectada
// Por ejemplo, ahora ponemos firstName y lastName la propiedad person de SuperHero
// recibirá en lugar de 3 argumentos en lugar de dos







