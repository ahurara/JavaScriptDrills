// const fibSeries = (n) => {
//     let a = 0, b = 1;
//     const series = [];

//     if (n === 1) {
//         series.push(a);
//         console.log(series);
//     } else if (n === 2) {
//         series.push(a);
//         series.push(b);
//         console.log(series);
//     } else {
//         for (let i = 2; i < n; i++) {
//             let next = a + b;
//             series.push(next);
//             a = b;
//             b = next;
//         }
//         console.log(series);
//     }
// }

// fibSeries(10);
function generateFibonacciSeries(n) {
    let fibonacciSeries = [];
    
    // First two numbers of Fibonacci series
    let a = 0, b = 1;
    
    // If the number of terms is 1, return just 0
    if (n === 1) {
        fibonacciSeries.push(a);
        return fibonacciSeries;
    }
    
    // If the number of terms is 2, return 0 and 1
    if (n >= 2) {
        fibonacciSeries.push(a);
        fibonacciSeries.push(b);
    }
    
    // Generate the Fibonacci series
    for (let i = 2; i < n; i++) {
        let next = a + b;
        fibonacciSeries.push(next);
        a = b;
        b = next;
    }
    
    return fibonacciSeries;
}

// Example usage:
let numberOfTerms = 10;
let fibonacciSeries = generateFibonacciSeries(numberOfTerms);
console.log("Fibonacci series with", numberOfTerms, "terms:", fibonacciSeries.join(", "));
