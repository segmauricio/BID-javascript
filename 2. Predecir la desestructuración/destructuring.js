//1-
const cars = ['Tesla', 'Mercedes', 'Honda']     //const[randomCar, otherRandomCar, /unnamed property/] = cars;
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)                          //console.log(randomCar) logs "Tesla";
console.log(otherRandomCar)                     //console.log(otherRandomCar) skips the first property and logs "Mercedes";
console.log("------------------------------------------------------------------------------------------------")
//2-
const employee = {                              //const [name, age, company] = employee;
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;           //el valor de 'name' fue redirigido a 'otherName'
//Predict the output
//console.log(name);                            //Causa un error de referencia ya que 'name' no esta mas definido en el objeto
console.log(otherName);
console.log("------------------------------------------------------------------------------------------------")
//3-
const person = {                                //const [name, age, height] = person;
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';                   
const { password: hashedPassword } = person;    //una propiedad 'password' es creada dentro del objeto
/*Al especificar el nombre de la propiedad, la contraseña, accederá al valor de esa propiedad en nuestro objeto.
Los dos puntos :después del nombre de la propiedad seguido de su nueva variable redirigen el valor de la contraseña que se debe almacenar
enhashedPassword, eliminando así el conflicto de identificador mencionado anteriormente.*/
//Predict the output
console.log(password);                          //it logs"12345"
console.log(hashedPassword);                    //it logs "undefined" because the object person doesnt have a property 'password'
                                                //the var is created either way but since it isnt defined in the object it doesnt have any value
console.log("------------------------------------------------------------------------------------------------")
//4-
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];  //const[x, first, x, second, x, x, x, x, third]
const [,first] = numbers;                       //the property in the position 1 is "first"
const [,,,second] = numbers;                    //the property in the position 3 is "second"
const [,,,,,,,,third] = numbers;                //the property in the position 8 is "third"
//Predict the output
console.log(first == second);                   //the (==) operator checks whether 2 operands are equals, returning a boolean result
                                                //in this case, first (2) isn't equal to second (5) so it returns FALSE
console.log(first == third);                    //however, first(2) is equal to third(2) therefore it returns TRUE
console.log("------------------------------------------------------------------------------------------------")
//5-
const lastTest = {                              //const lastTest[key, secondKey[0, 1, 2, 3, 4, 5]]
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;                       //extraemos la propiedad 'key' del objeto 'lastTest'
const { secondKey } = lastTest;                 //extraemos la propiedad 'secondKey' del objeto 'lastTest'
const [ ,willThisWork] = secondKey;             //extraemos el valor de la posicion 1 de la propiedad 'secondKey', asignandolo a una variable 'willThisWork'
//Predict the output
console.log(key);                               //This logs the string "value" stored in the property 'key'
console.log(secondKey);                         //This logs the array stored in the 'secondKey'
console.log(secondKey[0]);                      //This logs the value in the position 0 of the property 'secondKey'
console.log(willThisWork);






