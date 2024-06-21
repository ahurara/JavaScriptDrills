{
  let x = 6;
  console.log(x);
}

{
  var x = 2;
  console.log(x);
}

console.log(x);

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.filter((x) => x % 2 === 0);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//map() transforms each element of an array based on a function, while filter() selectively includes
// elements from the original array based on a condition

let z = 6;

function fun() {
  console.log(z);
}

fun();

//the bind() method is used to create a new function with a specified this value,
const person = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    let x = this.firstName + " " + this.lastName;
    console.log(x);
  },
};


let display = person.display.bind(person);
setTimeout(display, 3000);

// closure property

for (var i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}


console.log();


for (let i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
