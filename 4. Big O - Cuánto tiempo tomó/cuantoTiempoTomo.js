//! 1- Calcular números primos
/*Number.prototype.isPrime = function() {
    for( let i=2; i<this; i++ ) {
        if( this % i === 0 ) {            
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
*/

Number.prototype.isPrime = function(){
    if (this <= 1) return false;
    if (this === 2) return true;
    let num2 = Math.sqrt(this);              //num2 is the square root of num
    for (let i= 2; i <= num2; i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}
const { performance } = require('perf_hooks');
const start = performance.now();

let primeCount = 0;
let num, num2 = 2;                          //Por razones matemáticas, 1 se considera primo
//We calculate the 100,000th primer number
while (primeCount < 100000) {
    if(num.isPrime() ) {
        primeCount++;
    }
    num++;
}
//We calculate the 1,000,000th primer number
while (primeCount<1000000){
    if(num2.isPrime() ) {
        primeCount++;
    }
    num2++;
}
console.log(`The 100,000th prime number is ${num-1}`);
console.log(`The 1,000,000th prime number is ${num2-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

//! 2- ¿Qué implementación de Fibonacci debería ser más rápida?
//* Recursive en 0,234 segundos
function rFib( n ) {
    if (n < 2) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
console.log(rFib(20));
//* Iterative en 0,244 segundos. Esta es la funcion más rápida
/*Las funciones iterativas son mas rapidas y eficientes que las recursivas. Son faciles de optimizar y generalmente
tienen complejidad de tiempo polinomial
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
console.log(iFib(20));*/

//! 3- ¿Podemos revertir una cadena de manera más eficiente?
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

/*The original code provided that takes almost 0.3 seconds to run
const reversed1 = story.split("").reverse().join("");*/

//*TODO: in comparison, my solution runs in 0.234 seconds
let reversed2=" ";
for(var i=story.length-1; i>=0; i--){
    reversed2 += story[i];
}
console.log(reversed2);

/* Otro metodo
function reverse2(str){
    return str.split('').reduce((reversed, character) => character + reversed, ' ');
}
console.log(reverse2(story));*/

/*Otro metodo
var reverse = function (x) {
    const length = x.length;
    for(let i = 0; i < Math.floor(length / 2); i++) {
        const temp = x[i]
        x = x.substring(0, i) + 
        x.charAt(length - i - 1) +  
        x.substring(i + 1, length - i - 1) + 
        temp + 
        x.substring(length - i)
    }
    return x
};
console.log(reverse(story));*/
