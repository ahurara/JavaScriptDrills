/* Object destructuring allows you to extract properties from an object and assign them to variables
 in a concise way */

const person = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
    address : 'karachi'
  };
  
 
  const { name, age, city } = person;
  
  console.log(name); 
  console.log(age);  
  console.log(city);
  

  /* The rest operator ... in JavaScript collects the remaining elements of an array or properties 
  of an object into a new array or object. */

  const {address , ...rest}= person
  console.log(rest)

  //we can make a function with dynamic parameters using rest operator

  const fun = (...rest) => console.log(rest)
  fun(1,2,3,4,'champ')



/* The spread operator ... expands the elements of an iterable (like an array) or properties of 
an object into a new array or object. */

const arr1 =[1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2 ,7,8];
console.log(arr3)