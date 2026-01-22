// skils es un aregle de string, por eso string se pone con []
const skills: string[] = ['Bash', 'Counter', 'Healing']
console.log(skills);
// En este caso no podemos asignar las variables a un tipo string, o number... 
// No se puede hacer name: string: 'Aragorn' 
// Para arreglar esto lo que hacmos es una intefaz
/*
const Aragorn = {
    name: 'Aragorn',
    hp: 100,
    skills: ['Bash', 'Counter']
}c:\Users\jorge.abalo\Desktop\angular2\01-typescript-intro */

interface Character {
    name: string;
    hp: number;
    skills: string[];
    homeTown?: string;
}

// En este caso en la interface hemos añadido una variable más, y en el personaje no la tenemos.
// Para poder añadirlo en el momento pinchamos en la constante y pulsamos ctrl + .
// y pulsamos add missing properties
const Aragorn: Character = {
    name: 'Aragorn',
    hp: 100,
    skills: ['Bash', 'Counter'],
    // Pero en caso de que no lo queramos añadir aún, tenemos una manera que es añadiendo en
    // la variable una interrogación. De esta manera estamos diciendo que no es obligatorio
    // En la interface homeTown?: string
} 

// Ahora aquí abajo podríamos llamar al objeto Aragorn y con un punto llamar a cualquiera 
// de sus variables
Aragorn.homeTown = 'Rivendell';

console.table(Aragorn);
// Para poder mostrar esto en la consola, tenemos que irnos a main.ts e importar 02-object...