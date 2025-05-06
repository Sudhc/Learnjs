arr = [1,2,3,4,5,6]
console.log(arr.length)  //6 .length to find length of an array


arr1 = ["sud","var","deepak"]
arr2 = ["raju", 1,4,5,true, undefined,null] //array will also have mixed data types
console.log(arr1[0])  //sud
console.log(typeof[arr1])  //In any array return type should be an object
console.log(typeof[arr2])  //In any array return type should be an object

console.log(typeof(arr1[0]))  //string

//concat will join 2 arrays 

arr3 = arr1.concat(arr2)
console.log(arr3)

arr4 = ["kohli","Yuvraj","Dhoni","Sehwag"]
//**To add element at the end of an array we use push method
arr4.push("sachin")
// console.log(arr4)
arr4.push("Abhishek")  //Push is the method we use to add at the end of an array
// console.log(arr4)  
//** To add element at the begining of an array we use unshift method
arr4.unshift("Gill")  //Push is the method we use to add at the end of an array
console.log(arr4)  

// length
// concat
// push
// unshift
// Pop - will remove the element last element of an array
// shift

arr4.pop()
console.log(arr4)

arr4.shift()
console.log(arr4)

//using for loop we can remove all the elements in an array

arr5 = ["sud","kiran","damo"]
console.log(arr5.length)
// for(let i=0; i<arr.length-1; i++){       
//     arr5.pop()
// }
 //or
//  for(let i=1; i<arr.length; i++){
//     arr5.pop()
//  }
// console.log(arr5)

//convert sring to array - split()

arr6 = arr5.split("")
console.log(arr6)
// str = "my place is kdp"
