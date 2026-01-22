interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

// Si queremos que nos complete automáticamente las propiedades pinchamos en el nombre 
// de la constante y pulsamos ctrl + .
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

// Queremos sacar el nombre de la canción
// si lo hiciesemos sin destructuración, tendríamos que poner:
console.log('Song: ', audioPlayer.song );
// Con autor sería un poco más rebuscado, ya que tendríamos que poner:
console.log('Author: ', audioPlayer.details.author);

// La destructuración quiere decir que podamos coger de un sitio ciertas piezas 
// que nos interesan
// En este cas vamos a coger piezas del objeto audioPlayer
const {} = audioPlayer;
//Si nos pinchamos entre los corchetes y pulsamos ctrl + espacio, podremos ver las 
// piezas que podemos sacar

const {song} = audioPlayer;
// Acabamos de crear una constante llamada song y la podemos usar directamente
console.log('Song: ', song);

// Puede pasar que ya tuviesemos una constante definida anteriormente con el nombre 
// de una de las piezas que tiene audioPlayer y queremos renombrarla
// Para renombrar la pieza dentro de audioPlayer usamos los dos puntos :
const songDuration: number = 0;
const {songDuration:Duration} = audioPlayer;

console.log('constante: ', songDuration, '| Pieza audioPlayer: ', Duration );

// Vamos a destructurar author y year. Para ello prrimero vamos a destructurar details
const {details} = audioPlayer;
const {author} = details;
const {year} = details;

console.log('El autor es: ', author, ' y el año de la canción: ', year);


// Destructuración de arreglos

// definimos una constante llamada dbz y le asignamos un arreglo de tipo string
// dentro de este arreglo añadimos nuestros string
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

// Si queremos sacar el último nombre
console.log('Personaje 3: ', dbz[2]);

// Si por ejemplo buscamos un número de personaje que no está en la lista
console.log('Personaje 4: ', dbz[4]);
// Nos muestra por consola: Personaje 4:  undefined

// Pero podemos poner que nos salga un mensaje:
console.log('Personaje 4: ', dbz[4] || 'Personaje no encontrado'); 
// Personaje 4:  Personaje no encontrado

// Otra forma de hacerlo sería crear una constante y poner en caso de que no exista 
// personaje no encontrado
const trunks = dbz[4] || 'Personaje no encontrado';
console.log(trunks);  // Personaje no encontrado

// Pero hay una manera más fácil de hacerlo y es con la destructuración
// En objetos la destructuración es com llaves {} y en arreglos con corchetes []
const [p1, p2, buu]: string[] = ['Freezer', 'Cell', 'Buu'];
console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', buu);

// No haría falta tener a los dos primeros personajes para tener al tercero
const [ , , krilin]: string[] = ['Duende Tortuga', 'Bulma', 'Krilin'];
console.log('Personaje: ', krilin);

// Esto pasaría en caso de no tener un tercer personaje en el array
const [ , ,chaoz]: string[] = ['Puar', 'Ulong'];
console.log('Personaje: ',chaoz); // Personaje:  undefined
// En este caso podemos asignar un valor por defecto con la constante = 'Not found'
const [ , ,pilaf = 'Not found']: string[] = ['Puar', 'Ulong'];
console.log('Personaje :',pilaf); // Personaje : Not found

