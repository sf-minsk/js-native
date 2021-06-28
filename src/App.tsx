import React from 'react';
import './App.css';


// let count = 0;
// // @ts-ignore
// function recurse() {
//     // console.log(count)
//     if (count === 5 ) return 'done';
//     count++;
//     return recurse();
// }
// console.log(recurse());


// // @ts-ignore
// const sumOfDigits = num => num / 10 < 1 ? 1 : 1 + sumOfDigits(num / 10);
//
// // console.log(sumOfDigits(100)) //3
// console.log(sumOfDigits(1000)) //4


// @ts-ignore
const sumTo = (n) => {
    if (n === 1) return 1
    return n + sumTo(n - 1)
}
// console.log(sumTo(100))

// @ts-ignore
const fact = (n) => {
    if (n === 1) return 1
    return n * fact(n - 1)
}
// console.log(fact(5))



// @ts-ignore
const fib = n => {
    if (n <= 1) return n
    return fib(n - 2) + fib(n - 1)
}
console.log(fib(2))



// @ts-ignore
const fib2 = n => {
    let a = 1
    let b = 1
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b
}
// console.log(fib2(77))




export function App() {
    return <>
        recursion
    </>
}