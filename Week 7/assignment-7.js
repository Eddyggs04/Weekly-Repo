// QUESTION 1:
// a. Declare an array, 
//          and print it to the console
let ages = [3 ,9 ,23 ,64 ,2 ,8 ,28 ,93];
console.log(ages);



// b. Subtract the value of the first element from the value of the last element
//          and print the result to the console.
let subtract = ages[ages.length - 1] - ages[0];
console.log(subtract);



// c. Insert the value 100 into your array, print the array, and repeat step b.
ages.push(100);
console.log(ages);

let newSubtract = ages[ages.length - 1] - ages[0];
console.log(newSubtract);



// d. Use a loop to iterate through the array and calculate the average age, 
//          and print the average age out to the console.
let average = 0;

for (let i = 0; i < ages.length; i++){
    average += ages[i];
}

console.log(average/ages.length);

// QUESTION 2 & 5 & 6
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ['Andy', 'Karim', 'Eli', 'Maya', 'Christina', 'Elena'];

let nameLengths = [];

// pushes the length of each name into the nameLengths array
for (let i = 0; i < names. length; i++){
    nameLengths.push(names[i].length);
}

let nameAverage = 0;

// a. Use a loop to iterate through the array and calculate the average number of letters per name.
for (let i = 0; i < nameLengths.length; i++){
    nameAverage += nameLengths[i];
}
// prints the sum of all the elements in nameLengths
console.log(nameAverage);

// prints the average number of letters
console.log(nameAverage / names.length);

// b. concatenates all names together separated by a space
console.log(names.join(' '));

// QUESTION 3: To access the last element in an array you can console.log either (array.pop()) or (array.length -1).
// QUESTION 4: To access the first element in an array you can console.log(array[0]).
// QUESTION 7:

function repeat (word, n){
    console.log(word.repeat(n));
}
repeat('Hello', 3);

// QUESTION 8:
function fullName (firstName, lastName){
    return firstName + ' ' + lastName;
}
console.log(fullName('Eddy', 'Garcia'));

// QUESTION 9:
let largeSum = 0

//function 
function largeNumbers (array) {

//adds together numbers within array
    for(let i = 0; i < array.length; i++){
        largeSum += array[i];
    }
//if the sum is greater than 100 return true, else return false
    if (largeSum > 100){
        return true;
    } else {
        return false;
    }
}
console.log(largeNumbers([76, 4]));

//QUESTION 10:
let sumOfAll = 0;
function returnAverage (array) {
    for(let i = 0; i < array.length; i++){
        return sumOfAll += array[i];
    }
}

console.log(returnAverage ([20,10,30]));

//QUESTION 11: Couldn't get to work :(
let sumOfOne = 0;
let sumOfTwo = 0;
function whichIsGreater (array1, array2) {
    for( let i = 0; i < array1.length; i++){
        return sumOfOne += array1[i];
    }
    for(let j = 0; j < array2.length; j++){
        return sumOfTwo += array2[j];
    }
    if (sumOfOne > sumOfTwo){
        return true;
    } else {
        return false;
    }
}
console.log(whichIsGreater([5,6,7], [8,9,10]));

//QUESTION 12:
//Creates function, then if else statement
function willBuyDrink (boolean, number) {
    if (boolean == true && number > 10.50){
        return true;
    } else {
        return false;
    }
}

console.log(willBuyDrink(true, 12));

//QUESTION 13: This code will find the range of any set of numbers
function range (array) {
    let max = array[0];
    let min = array[0];
    if (array.length <= 0 ){
        return null;
    }
    for (let i = 1; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
        } 
        if (array[i] < min){
            min = array[i];
        }
    }
    let result = max - min;
    return result;
}

const array = [5, 10, 3, 8, 15];
const test = range(array);
console.log("Range:", test); // Output: Range: 12