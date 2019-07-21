/*
CODE CHALLENGE 1 - OBJECTS

Create a function that swaps the value of any 2 specified properties in a object, make sure you don't mutate (change)
the original object. Your function may have 3 parameters, the original object, property 1, property 2.
*/

let wizard = {
    name: "Harry Potter",
    house: "Gryffindor",
    eyeColor: "green",
}

console.log(wizard);

function swapValue (object, a, b) {
    let obj = {};              //created a new object 

    for (let key in object) {    //created values for the new object
        obj[key] = object[key]
    }
    obj[a] = object[b];        //obj[a] is the 'name' key, object[b] is gryffindor
    obj[b] = object[a];        //obj[b] is the 'age' keym object[a] is harry potter

    return obj;
}

console.log(swapValue(wizard, 'name', 'house'));

//play code below
let newObj = {};      

newObj.name = 'Godzilla';      
newObj.age = 270000000;

console.log(newObj);

//console.log(newObj['name']);

let key = 'name';

//console.log(newObj[key]);

for (let key in newObj) {
    console.log(newObj[key]);
}