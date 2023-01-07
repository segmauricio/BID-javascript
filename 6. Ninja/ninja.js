class Ninja{
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = health || 0;
        this.speed = speed || 3;
        this.strength = strength || 3;
    }
    sayName(){
        console.log(`- The name of the ninja is ${this.name}`)
    }
    showStats(){
        console.log(`- The stats of the ninja are the following: Name [${this.name}], Strenght [${this.strength}], Speed [${this.speed}] and Health [${this.health}]`)
    }
    drinkSake(){
        this.health += 10;
        this.showStats();
    }
}

const ninja1 = new Ninja("Hyabusa", 7, 4, 5);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
