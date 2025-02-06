'use strict';
/*let hasDriversLicense = false;
const hasPassedTest = true;
if (hasPassedTest) {
    hasDriversLicense = true;
}
if (hasDriversLicense) {
    console.log('You can drive :D')
}*/

function logger() {
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
console.log(newJuice);