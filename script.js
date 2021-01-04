'use strict';

// /*let hasDriversLicense = false;
// const passTest = true;

// if (passTest === true) {
//     hasDriversLicense = true;
//     console.log('yee');
// }*/

// function logger() {
//     console.log('My name is Jonas');
// }

// //  calling / running / invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);



// //Function declaration
// function calcAge1(birthYear) { //parameter
//     return 2037 - birthYear;
// }

// console.log(calcAge1(1991)); //arguments




// //Function expression
// const calcAge2 = function (birthYear) { // anonymous function expression
//     return 2037 - birthYear;
// }

// console.log(calcAge2(1991));

// console.clear();

// const yearsUntilRetirement = (birthYear, firstName) => { //if multiple parameters, wrap in parantheses ex (birthYear, firstName)
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1995, 'Beata'));

// const suma1 = function sum(a, b) {
//     return a + b;
// }
// const suma2 = (a, b) => a + b;

// console.log(suma1(2, 3));
// console.log(suma2(3, 4));

//Functions calling other functions

//machine that cuts fruits
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(2, 3));

// const calcAge3 = function (year) {
//     return 2021 - year;
// }
const calcAge3 = a => 2021 - a;

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge3(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
    } else {
        return -1;
    }
}

return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1995, 'Beata'));