//1-
console.log(hello);                                   
var hello = 'world';
/*
var hello;
console.log(hello) logs undefined
hello = 'world'
*/
console.log("------------------------------------------------------------------------------------------------")
//2-
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
/*
var needle;
needle = "haystack"
function test() is defined;
var needle = "magnet";
console.log(needle) logs "magnet";
*/
console.log("------------------------------------------------------------------------------------------------")
//3-
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
/*
var brendan;
brendan = "super cool";
function print() is defined;
brendan = "only okay;
console.log(brendan) logs "only okay"
console.log(brendan) outside the print() function logs "supercool" since the function wasn't called;
*/
console.log("------------------------------------------------------------------------------------------------")
//4-
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
/*
var food;
food = "chicken";
console.log(food) logs "chicken";
function eat() is defined;
food = "half-chicken";
console.log(food) logs "half-chicken";
food = "gone" but this change isn't logged anywhere so it isn't displayed;
the function eat() is called;
*/
console.log("------------------------------------------------------------------------------------------------")
//5-
/*mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);*/
/*
Se obtiene un error porque la variable 'mean' se elevo a la cima y se trato de invocarla antes de asignarle una funcion
*/
console.log("------------------------------------------------------------------------------------------------")
//6-
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
/*
console.log(genre) logs undefined cause the variable 'genre' hasn't been defined yet
var genre;
genre = "disco";
the function rewind() is defined;
genre = "rock";
console.log(genre) logs "rock";
genre = "r&b";
console.log(genre) logs "r&b";
the function rewind() is called;
console.log(genre) logs "disco" cause the function rewind() didn't return the change of the variable;
*/
console.log("------------------------------------------------------------------------------------------------")
//7-
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
/*
var dojo;
dojo = "san jose";
console.log(dojo) logs "san jose";
the function learn() is defined;
dojo = "seattle";
console.log(dojo) logs "seattle";
dojo = "burbank";
console.log(dojo) logs "burbanks";
the function learn is called;
console.log(dojo) logs "san jose" cause the function learn() didn't return the change of the variable;
*/
console.log("------------------------------------------------------------------------------------------------")
//8-
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; //HERE'S THE PROBLEM
    }
    return dojo;
}
/*
the function makeDojo() is defined with two parameters;
parameter 1 = name;
parameter 2 = students;
const dojo;
dojo is an object;
key dojo.name;
dojo.name = name; //The key is asigned the value of the 'name' variable
key dojo.students;
dojo.students = students; //The key is asigned the value of the 'students' variable
a conditional is ran;
if the quantity of the dojo.students is bigger than 50, a new key "dojo.hiring" is assigned the bool 'true' value;
else if the quantity of dojo.students is equal or less than 0, then here occurs the problem
    dojo is a const and its value can't be changed;
else no hiring is needed therefore the key dojo.students isn't attached;
console.log(makeDojo("Chicago", 65)) logs the object "{ name: 'Chicago', students: 65, hiring: true }"
console.log(makeDojo("Berkeley", 0)) doesn't log anything cause of a TypeError where a value was tried to be re-assigned to a constant;
*/


