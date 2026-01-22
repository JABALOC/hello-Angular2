

class Person1 {
    // Las variables dentro de las clases de tienen que inicializar.
    // Técnicamente son variables, pero cuando están dentro de una clase se conocen como 
    // Property y las funciones dentro de la sclases se conocen como métodos

    // Podemos hacer varias cosas:
    // public name: string | undefined // el nombre puede venir vacio
    // public name?: string // es parecido al anterior, pero en este caso no existe el valor
    public name: string;
    private address: string;
    // public quiere decir que se puede acceder a la variable desde cualquier parte
    // private quiere decir que solo se puede acceder dentro de la clase

    // Podemos inicializar las propiedades dentro del constructor
    constructor() {
        this.name = 'Jorge';
        this.address = 'Madrid';

    }
}

// Si ponemos el ratón encima de ironman, vemos que dice que es de tipo Person, como 
// una interface.
const persona = new Person1()

// Con esto vemos que es una instancia de tipo Person, que tiene name y address
// Person {name: 'Jorge', address: 'Madrid'}
console.log(persona)

// si queremos imprimir el nombre solo o la dirección y ponemos ironman.
// vemos que solo nos da la opción de imprimir el nombre, ya que address es private
// y estamos fuera de la clase (aunque realmente si ponemos .address sí que sale en 
// consola. Pero te marca error)
//console.log(ironman.address);

// El constructor es un método especial en nuestra clase. Es el primer 
// método o función que se va a llamar cuando nosotros creamos la intancia de nuestra clase
// const ironman = new Person();

// En este caso Person() no recibe ningún parámetro ya que en el contructor no 
// hemos indicado que tenga que recibir un parámetro, pero si hiciesemos esto:
/*constructor(name: string, address: string) {
        this.name = 'Jorge';
        this.address = 'Madrid';

    }*/
// Esto obligaría a pasar dos string como parámetro. Pueden ser incluso dos string vacios
// tambien puede ser opcional si lo ponemos así address?: string

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

// Otra manera de crear una clase sería la siguiente
/*class Person2 {
    constructor(
        public name: string,
        private address: string, 
    ) {}
}*/
// Pero en nuestro caso nos da el siguiente error: This syntax is not allowed when 
// erasableSyntaxOnly is enabled.
// Para hacer que no nos salga, tendríamos que desactivar la opción en package.json
// Pero no es recomendable


// Extender una clase //
// Extender una clase es añadir o expandir su funcionalidad
export class Hero extends Person {

    // Podemos definir nuevas propiedades para la clase Hero
        public alterEgo: string;
        public age: number;
        public realName: string;


    //constructor() {
        // Constructors for derived classes must contain a super call.
        // Nos obliga a llamar al constructor del padre
        // super(dentro las propiedades de la clase padre)
        
        // Y nos dice que tenemos que tener en el constructor lo siquiente
        // constructor Person(name: string, address: string): Person
    constructor(alterEgo: string, age: number, realName: string) {
        
        super(realName, 'New York') // De esta manera le pasamos a la clase Person
        // los parámetros ya inicializados. si quisieramos declararlo dentro de la clase 
        // Hero tendríamos que meterlo en el contructor y en super(name, address)
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;
    }
}
const capitanAmerica = new Hero('Capitán América', 115, 'Steve Rogers');
console.log(capitanAmerica);
