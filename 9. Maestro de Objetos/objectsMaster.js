const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// Podríamos crear una lista de pokémon que tengan nombres que comiencen con la letra "B" usando el siguiente código.
const bListPkmn = pokemon.filter( p => p.name[0] === "B" );
console.log(bListPkmn);

// O si quisiéramos devolver una matriz de solo los identificadores, podríamos usar algo como esto.
const pkmnIds = pokemon.map( p => p.id )
console.log(pkmnIds);


//! Usando la matriz de Pokémon anterior, encuentra lo siguiente:
//* Una serie de objetos Pokémon donde la identificación es divisible por 3
const idDivThree = pokemon.filter(p => p.id % 3 === 0);
console.log(idDivThree);

//* Una serie de objetos Pokémon que son del tipo "fuego" 
const fireType = pokemon.filter(p => p.types.includes('fire'));
console.log(fireType);

//*Una variedad de objetos Pokémon que tienen mas de un tipo
const pkmnDualTypes = pokemon.filter(p => p.types.length > 1);
console.log(pkmnDualTypes);

//*Una matriz con solo los nombres de los Pokémon
const pkmnNames = pokemon.map(p=>p.name);
console.log(pkmnNames);

//*Una matriz con solo los nombres de Pokémon con una identificacion mayor que 99
const pkmnHighId = pokemon.filter(p => p.id > 99);
console.log(pkmnHighId);

//*Una matriz con solo los nombres del Pokémon cuyo unico tipo es veneno
const monoPoistonType = pokemon.filter(p => p.types == "poison");
console.log(monoPoistonType);

//*Una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es Volador
const flyingSecondType = pokemon.filter(p => p.types[1] == "flying").map(p => p.types[0]);
console.log(flyingSecondType);

//*Un recuento de la cantidad de Pokémon que son de tipo Normal
const pkmnNormalType = pokemon.filter(p => p.types.includes('normal')).length;
console.log(pkmnNormalType);
//console.log(pkmnNormalType.length); //this works too, but we have to remove the .length at the end of the filter

