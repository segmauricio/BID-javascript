class Ninja{
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = health || 0;
        this.speed = speed || 3;
        this.strength = strength || 3;
    }
    sayName(){
        console.log(`- The name of the ninja is ${this.name}`)}
    showStats(){
        console.log(`Nombre: ${this.name}, Salud: ${this.health}, Velocidad: ${this.speed}, Fuerza: ${this.strength}`)}
    drinkSake(){
        this.health += 10;
        this.showStats();           //* Instead of doing another console.log we just call the previous function and it's updated
    }
}

//Clase hija de Ninja
class Sensei extends Ninja{
    constructor(name, wisdom){
        super(name, 210, 10, 10);                              
        this.wisdom = wisdom || 10;  //* New attributes should be declared in the constructor too
    }
    speakWisdom(){
        //super.drinkSake(); //?Funciona tambien con this
        console.log(`Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses`);
    }
}
//Ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();