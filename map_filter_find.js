const num = [1, 2, 3, 4, 5];

//if we give condition in map it will retur array of same length but the value will be boolean
const num1 = num.map((e) => {
  return e > 3;

});



// Using operations in filter returns all original array values since the condition is always true
const num2 = num.filter((e) => {
    return e * 2;
  
  });

console.log(num2);