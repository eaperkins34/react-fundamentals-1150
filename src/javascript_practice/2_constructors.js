//We name the class
class User {
    //We call the constructor function and create parameters.
    //These will be values that we want to be passed in and stored in the object.
    constructor(first, last, e) {
                //On the right side of these expressions, the word 'first', 'last', and 'e' below,
                //we have the value that is getting passed into the parenthesis when the object is created
                //vvv
        this.f = first;
        this.l = last;
        this.email = e;
        //^^^^^^^^^
        //On the right side we have the actual properties of the object.
        //The left side stores the incoming value from the right side as
        //the property for 'this' specific object being created.
    }
}

var userOne = new User ("Emily", "Perkins", "eaperkins34@gmail.com");
console.log(userOne.first); //undefined
console.log(userOne.f); // Emily
console.log(userOne.l); //Perkins
console.log(userOne);  // User {f: 'Emily', l: 'Perkins', email: 'eaperkins34@gmail.com' }