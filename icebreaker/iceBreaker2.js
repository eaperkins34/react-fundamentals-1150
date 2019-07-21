/* CHALLENGE */

/*BRONZE
     Given a parameter of an array [40, 17, 10, 76, 22]
     Create a function that returns the product of every element in the array*/
/******************************************/
//MY ANSWER
let array1 = [40, 17, 10, 76, 22]

function multiply (array) {
    let sum = 1;
    for (let i = 0; i < array.length; i++) {
    sum = sum * array[i]
    } return sum;
}

console.log(multiply(array1));
/********************************************/
//STUDENT ANSWER
let numArr = [40, 17, 10, 76, 22]

function multiply (inputArr) {
    let product = 1;
    for(let i = 0; i < inputArr.length; i++) {
        product = product*inputArr[i];
    }
    return product
}
console.log(multiply(numArr));
/*********************************************/
//TEACHER ANSWER
let arr = [40, 17, 10, 76, 22]

function multiply (inputArr) {
    return inputArr.reduce((accumulator, current) => accumulator * current)     //reduce condenses everything into one answer, it takes a callback function
}                                             //reduce is essentially a fancy forLoop
console.log(multiply(arr));          //reduce is a function that takes an accumulator (a storage variable that can grow) and multiplies it by the current value in the array. 
                                     // it defaults to 1 and multiplies by 40, then takes 40 and multiplies by 17, takes that product and multiplies buy 10, etc...


/*SILVER
    Given two arrays 
          EX::  const firstArr = [ 1, 2, 3, 4, 5];
                const secondArr = [ 1, 2, 3, 4, 5];
                Create a function that checks to make sure the arrays are the same length
                
                Then returns an array of the products of the elements with matching indexes 
                ( multiply 0 with 0, 1 with 1, etc.).
                EX :: the example arrays should return  [ 1, 4, 9, 16, 25 ]
                If the arrays are not the same length, return an error message
                EX:: 'Please provide valid arrays'
                */

//MY ANSWER
const firstArr = [ 1, 2, 3, 4, 5];
const secondArr = [ 1, 2, 3, 4, 5, 6];

function check (array1, array2) {
    if (array1.length == array2.length) {
        let sum = [];
        for (let i = 0; i < array1.length; i++) {
        sum[i] = array1[i] * array2[i];
        } return sum;
    } else {
    return ('Please provide valid arrays');
    }
}

console.log(check(firstArr, secondArr));

//STUDENT ANSWER

const num = [ 1, 2, 3, 4, 5];
const num2 = [ 1, 2, 3, 4, 5];

function multiplyArray(array1, array2) {
    if (array1.length == array2.length){
        for (let i = 0; i < array1.length; i++){
            let p = array1[i] * array2[i];
            console.log(p);
        }
    } else {
        console.log('Please provide valid arrays');
    }
}
console.log(multiplyArray(num, num2))

/*GOLD
    Given 2 arrays:
    [10,20,30,40,50,70]
    [5,3,2,5]

    Create a function that multiplies 'like' indexes (0 with 0, 1 with 1, etc.) together then place the value in a new array. 
    
    The function you create should return [50, 60, 60, 200, 50, 70] based on the arrays above.

    Make sure the values given to the function are an array type and they have data inside of them.

    If the first array has more values than the second, return that same number
*/

/*********************************/
//MY ANSWER
const arr1 = [10,20,30,40,50,70];
const arr2 = [5,3,2,5];

function multArrays (array1, array2) {
    let sum = [];
    for (let i = 0; i <array1.length; i ++) {
    sum[i] = array1[i] * array2[i];
    } if (array1.length == array2.length) {
        return sum;    
    } else if ((array1.length > array2.length) || (array2.length > array1.length)) {
        return sum.push([array1.value*1])

    }
}

console.log(multArrays(arr1, arr2))

/***********************************/
//STUDENT ANSWER
let first = [10,20,30,40,50,70];
let second = [5,3,2,5];

function goldExperience (a,b){
    let newArray = [];
    if(a.length != b.length) {   //insures the arrays are of equal length
        b.length = a.length;
    } 
    for (let i = 0; i <a.length; i ++) {  
        if (b[i] == undefined){ //sets undefined values to 1
            b[i] = 1
        }
        newArray.push(a[i] * b[i]);  // fills new Array with our products
    }
    console.log(newArray);
}

goldExperience (first, second);

//notes below
console.log([] instanceof Object); // returns a boolean (true)
console.log(typeof []); //returns a string of that type (object)

console.log([] instanceof Array); //output it is true due to [] is an array
console.log(typeof []);  //output is object as [] is still an object
console.log(typeof {});  //output is object

function simple(input) {
    if (typeof input != 'string') {
        console.log('this input is wrong')
    } else {
        console.log('hooray')
    }
}

simple(10);  //since a number was enterred, the output is "input is wrong"

let arr = new Array(10); //"Array" is a constructor, it creates a new array
console.log(arr);   //ouput is [ <10 empty items> ]

