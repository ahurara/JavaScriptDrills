let str="hello world";

//using method
console.log(str.split("").reverse().join(""))

//without method
let x=[...str];
let text = '';
for(let i =x.length -1 ; i>=0 ; i--){
    text += x[i];
}
console.log(text);