let str = 'zennkoders';
let arr=[...str]
arr.sort();
console.log(arr);
let count=0;
for(let i = 0 ; i< arr.length; i++)
    {
        
        if( arr[i]==arr[i+1] || arr[i]==arr[i-1] ){
            count+=1;
            console.log(arr[i] , " " ,count )
        }
        else{
            count=1;
            console.log(arr[i] , " " ,count )
        }
    }