/*
    ===== Código de TypeScript =====
*/

// Se recomienda que cuando hagamos una interfaz que tiene dentro un objeto, 
// este tenga su propia interface
interface SuperHero {
    name: string;
    age: number;
    /*address: {
        calle: string;
        pais: string;
        ciudad: string;
    }*/
    address: Address;
    showAddress: () => void; 
}

// Hemos puesto los nombres en español y queremos cambiarlos todos a inglés. 
// Pues ponemos el ratón encima de la palabra y pulsamos F2
interface Address {
    street: string;
    country: string;
    city: string;
}


const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );
