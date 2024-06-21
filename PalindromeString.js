//check if a given string is a palindrome

let str = "madam";
if (str === str.split("").reverse().join("")) {
  console.log("String is palindrome");
}
else{
    console.log("string is not palindrome")
}
