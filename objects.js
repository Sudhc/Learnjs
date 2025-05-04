// credentials ={

//     username : 'Admin',
//     password: 'admin123'


// }
// console.log(credentials.username)
// console.log(credentials['password'])


student = {

    firstname : "sudheer",
    lastname:"naga",
    Place: "Bnglr",
    age:"27"
}
console.log(typeof(student.age))
console.log(student.age)
console.log(student['age'])
student['gender']='MALE'
console.log(student.gender)

delete student.age
console.log(student)
