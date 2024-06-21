let arr =[1,2,3,4,3,2,1];
arr = arr.sort();
// 1 1 2 2 3 3 4

//sort tthe array to get it in the right order, to be able to check the one that does not repeat.
let result;
for(let i = 0; i < arr.length; i++){
    if(arr[i] !== arr[i + 1] || arr[i] !== arr[i - 1]){
        result = arr[i];
    }
    //check if the element in front and the elemenet at the back of the arr[i] element are the same if not then that means the element is alone since this is a sorted array.
}
 
console.log(result)