/** BRONZE
Give a string parameter, create an arrow function that checks if the string meets these requirements
 - is of type string
 - is at least 30 characters long
 - is not full of whitespace

If the string does not pass the tests, return 'Parameter does not meet requirements'
If the string passes, return true;

const arrowFunction = () => {
    // Code logic
}
 */

//MY ANSWER
let str = ("Hello, my  name is Emily and I am a student");
var check = (string) => {
    if (((typeof string) == string) && (string.length > 30) && (string !== null)) {
    console.log("true")
} else {
    console.log("Parameter does not meet requirements")
    }
}    
console.log(check(str));

//STUDENT ANSWER
const bronze = (string) => {
    if (string.length > 29 && /\S/.test(string)) {
        return true;
    } else {
        return "Parameter does not meet requirements"
    }
}
const firstTest = "test test test test test test test test test test"
const errorTest = "                "

console.log(bronze(errorTest));

//STUDENT ANSWER
let test = "        ";
let words ="I am Poseidon, king of all the seas"

const bronzeTest = (test) => {
    (typeof test == 'string' && test !== null && test.length > 29) ? console.log("true")
    : console.log("Parameter does not meet requirements");
}

bronzeTest(words);
  /** SILVER
Given a string parameter "I love .NET!!" create an arrow function that check to make sure our parameter is a string,
then replace instances of .NET with React.

If the parameter is not a string, it should return an error message

If the string -does not- contain .NET, return a message saying 'Nothing to change'

"I love .NET!!" => "I love React!!"
 */
 
//MY ANSWER
let stringPar = "I love .NET!!"

var checkStr = (string) => {
    let x = (typeof string);
    if (x !== 'string') {
        console.log("error");
    } else if (string.includes(".NET") === false) {
        console.log("Nothing to change");
    }
    let newString = string.replace('.NET', 'React')
    return newString;
}

console.log(checkStr(stringPar));

//STUDENT ANSWER
let exampleTwo = "I love .NET!!"
let object = [1, 2, 3, 4]
let example = "I love tacos"

const checkAgain = (testTwo) => {
    if(typeof testTwo != 'string'){
        return console.log("not a string");
    } else if (testTwo.includes(".NET") === false){
        console.log("nothing to change");
    } else {
        let str = testTwo;
        let replace = str.replace('.NET', 'React');
        return replace;
    }
}

console.log(checkAgain(example));

  /** GOLD
Given the string -> 'Welcome to eleven fifty'

Create a function that accepts a string. 
    
In the function check to see if the value of the string is: 
- of type string
- has a length greater than zero
- has a length less than 30

If any of these are invalid send it to the else condition and show the message -> 'String must not be empty, null, or exceed 30 characters'

If the string is valid, change the string so that the 'e' and the first 'f' in 'eleven fifty' is capitalized

Make sure that trailing whitespace is trimmed off of the string. 

If finished, add a second param to the function for a callback function and instead of returning the data, place it inside of the callback arguments 
 */

//STUDENT ANSWER
let string = "  welcome to eleven fifty   ";

const goldFunction = (input, callback) => {
    if(input.length > 0 && input.length <= 30 &&typeof input == 'string'){
        let efCheck = 'eleven fifty';
        if(input.includes(efCheck)){
            let output = input.replace(efCheck, "Eleven Fifty").trim();
            return callback(output);
        } else {
            return "String must not be null, empty, or exceed 30 characters."
        }
    }
}

const actualReturn = function(x) {
    return x;
}

console.log(goldFunction(string, actualReturn));

