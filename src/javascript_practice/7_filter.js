const instructors = [
    {name: 'Aaron', specialty: 'Entomology', medals: 7},
    {name: 'Carolyn', specialty: 'Kung Fu', medals: 5},
    {name: 'Kenn', specialty: 'Norse Mythology', medals: 8},
    {name: 'Paul', specialty: 'Tuvan throat singing', medals: 4},
    {name: 'Quincy', specialty: 'Quantum Mechanics', medals: 2},
    {name: 'Tom', specialty: 'Chemistry', medals: 3}
]

let instructor_names = [];

// for (let i = 0; i < instructors.length; i++) {
//     instructor_names.push(instructors[i].name);
// }
// console.log(instructor_names);

// const instructorNames = instructors.map(instructor => instructor.name);
// console.log(instructorNames);

// //Exact same thing, different parameter name
// const instructorNamesTwo = instructors.map(i => i.name);
// console.log(instructorNamesTwo);

// const instructorInfo = `${instructors.map(instructors => `${instructors.name}: ${instructors.specialty}`)}`;
// console.log(instructorInfo);

for(let i = 0; i < instructors.length; i++) {
    if(instructors[i].medals >= 5){
        instructor_names.push(instructors[i].name);
    }
}
console.log(instructor_names);

const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
console.log(instructorNames);

//Exact same thing, different parameter name
const instructorNamesTwo = instructors.filter( i => i.medals >= 5);
console.log(instructorNamesTwo);