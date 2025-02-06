'use strict';
/*let hasDriversLicense = false;
const hasPassedTest = true;
if (hasPassedTest) {
    hasDriversLicense = true;
}
if (hasDriversLicense) {
    console.log('You can drive :D')
}*/

/*function logger() {
    console.log("Hello! I am a new function!!")
}

//invoking/calling/running the function
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges 🥤`
    return juice;
}

const fruitJuice = fruitProcessor(6, 8);
console.log(fruitJuice);

const newJuice = fruitProcessor(4, 7);
console.log(newJuice);*/

//Function Declaration
/*function calcAge1(birthYear) {
    const age = 2025 - birthYear;
    return age; //return 2025 - birthYear
}

const age1 = calcAge1(1993);
console.log(age1);

//Function Expression
const calcAge2 = function calcAge1(birthYear) {
    return 2025 - birthYear
}
const age2 = calcAge2(1993);
console.log(age2);*/

//Arrow Function
/*const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(1993);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in another ${retirement} years.`
}

console.log(yearsUntilRetirement(1994, 'Suve'));*/

//Functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    //console.log(applePieces, orangePieces)
    const juice = `Juice with ${apples} apples cut into ${applePieces} pieces and ${oranges} oranges cut into ${orangePieces} pieces 🥤`
    return juice;
}

console.log(fruitProcessor(4, 6));