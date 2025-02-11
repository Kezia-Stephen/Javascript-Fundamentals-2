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
/*function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    //console.log(applePieces, orangePieces)
    const juice = `Juice with ${apples} apples cut into ${applePieces} pieces and ${oranges} oranges cut into ${orangePieces} pieces 🥤`
    return juice;
}

console.log(fruitProcessor(4, 6));*/

//Arrays
/*const friends = ['Abby', 'Bubblo', 'Cady'];


const years = new Array(1991, 1984, 2008, 2025);

//console.log(friends[2]);
//console.log(years.length);

//friends[2] = 'Dasy';
//console.log(friends);

//Exercise
const calcAge = function (birthYear) {
    return 2025 - birthYear
}

const birthYears = [2004, 1987, 2021, 2024];
const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[2]);
console.log(age1, age2);

//Array Methods
//Add elements
friends.push('Deejoy');
console.log(friends);

friends.unshift('Zena');
console.log(friends)

//Remove elements
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Cady'));

console.log(friends.includes('Cady'));*/

//Objects
const kez = {
    firstName: 'Kezia',
    lastName: 'Idiot',
    birthYear: 1998,
    job: 'Pain in the butt',
    friends: ['Abby', 'Bubblo', 'Cady'],
    hasDriversLicense: true,
    // calcAge: function (birthYear) {
    //     return 2025 - birthYear
    // } //Function expression only works

    // calcAge: function () {
    //     return 2025 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and she has a ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
}

// console.log(kez.age);
// console.log(kez['age']);

const nameKey = 'Name';
console.log(kez['first' + nameKey]);
console.log(kez['last' + nameKey]);

//const interestedIn = prompt('What do you want to want about kez? Choose between firstName, lastName, age, job and friends.');
//console.log(kez[interestedIn]); //Only bracket notation works; Dot notation doesn't.

kez.location = 'India';
kez['linkedIn'] = '@keziastephen';

console.log(kez);

//Challenge
//Kez has 3 friends and her best friend is called Abby

console.log(`${kez.firstName} has ${kez.friends.length} friends and her best friend is called ${kez.friends[0]}`);

//Object methods
console.log(kez.calcAge());
//console.log(kez['calcAge'](1998))

console.log(kez.age)

//Challenge
//"Kez is a 27-year old Pain in the butt and he has a driver's license"
if (kez.hasDriversLicense) {
    kez.driversLicenseStr = 'a';
} else {
    kez.driversLicenseStr = 'no'
}

console.log(`${kez.firstName} is a ${kez.age}-year old ${kez.job} and she has ${kez.driversLicenseStr} driver's license`)

//or
console.log(kez.getSummary());
