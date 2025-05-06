//slice
//It is a method used to extract a portion of an array

import { partialDeepStrictEqual } from "assert"

// let stude = ["sud","kiran","madhu",30,33,56,88]
// let std1 = stude.slice(0,3) //what ever the end point we have given before that only it will print

// console.log(std1)

//splice

//By remving ,Repacing,  adding elements in an array

// mynums = [0, 1, 2, 3, 4, 5, 6, 7, 8]


// // mynums.splice(0, 5) //removing from 0 to 4

// // console.log(mynums)


// // mynums.splice(0,4, "spmething")  //replacing
// // console.log(mynums) //Here from 0 to 3 it will be replace

// mynums.splice(4,1,"sudheeer") //Here its re- placing instead of 4 it will give sudheer and 1 is for to put in one place
// console.log(mynums)

// mynums.splice(4,3,"sudheeer") //Here its re- placing instead of 4,5,6 it will give sudheer.Because we are giving 3.
// console.log(mynums)

// mynums.splice(3,0 ,"sudheeer") //Here its adding Adding value with out disturbing any value after 2 it will add
// console.log(mynums)


//Filtter
//It will returns new array
//Can manipulate the size of any array ,returns based on condition

const people= [{name: "hari",place: "jmd",Age:20},
         {name: "charan",place: "jmd",Age:30},
         {name: "shyam",place: "jmd",Age:34},];
//          const youngPeople = people.filter(function(person){
//             return person.Age<=30
//          });
// console.log(youngPeople) //here based on the condition it will print 2 arrays


// const newArray = people.filter(function(person){
//     return person.name ==="hari";

// });
// console.log(newArray);

//map
//returns new array,does not change the size of original array
//use the values from original array when making new one


// const youngPeople = people.map(function(person){
//                 return person.Age
//              });
//     console.log(youngPeople) 

// const newPeopleArray = people.map(function(person){
//     return {Youngage:person.Age,
//             newName:person.name
//     };
//  });
// console.log(newPeopleArray) 


