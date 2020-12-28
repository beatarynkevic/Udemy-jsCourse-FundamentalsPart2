'use strict';

/*let hasDriversLicense = false;
const passTest = true;

if (passTest === true) {
    hasDriversLicense = true;
    console.log('yee');
}*/

function logger() {
    console.log('My name is Jonas');
}

//  calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);



//Function declaration
function calcAge1(birthYear) { //parameter
    return 2037 - birthYear;
}

console.log(calcAge1(1991)); //arguments




//Function expression
const calcAge2 = function (birthYear) { // anonymous function expression
    return 2037 - birthYear;
}

console.log(calcAge2(1991));