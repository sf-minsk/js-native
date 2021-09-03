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
// const sumTo = (n) => {
//     if (n === 1) return 1
//     return n + sumTo(n - 1)
// }
// console.log(sumTo(100))

// @ts-ignore
// const fact = (n) => {
//     if (n === 1) return 1
//     return n * fact(n - 1)
// }
// console.log(fact(5))


// @ts-ignore
// const fib = n => {
//     if (n <= 1) return n
//     return fib(n - 2) + fib(n - 1)
// }
// console.log(fib(2))


// @ts-ignore
// const fib2 = n => {
//     let a = 1
//     let b = 1
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b
// }
// console.log(fib2(77))

// function theLongest(text) {
//     let arr1 = text.split(' ')
//     // @ts-ignore
//     let arr2 = arr1.map(el => el.split(''))
//     return arr2
// }
//
// console.log(theLongest("should test for something"))

// function nbYear(p0, percent, aug, p) {
//     let start = p0
//     let finish = p
//     let years = 0
//     let numPercent = percent/100
//     while (start < finish) {
//         start = start + start*numPercent + aug
//         years++
//     }
//     return years
// }
//
//
//
// function nbYear(p0, percent, aug, p) {
//     let newRes = 0
//     let oneYear = p0
//     while (oneYear <= p) {
//         oneYear = Math.floor(oneYear + oneYear * percent / 100 + aug)
//         newRes++
//     }
//     return newRes
// }
//
//
// console.log(nbYear(1500, 5, 100, 5000))
//
// console.log(nbYear(1500000, 2.5, 10000, 2000000))
//
// console.log(nbYear(1500000, 0.25, 1000, 2000000))
//
const tree = {
    value: 5,
    left: {
        value: 10,
        left: {
            value: 4,
        },
        right: {
            value: 7,
        },
    },
    right: {
        value: 11,
        left: {
            value: 3,
        },
        right: {
            value: 2,
        },
    },
};

const findMax = (obj: any) => {
    let max: number[] = []
    Object.values(obj).map(el => typeof el === 'number' ? max.push(el) : max.push(findMax(el)))
    return Math.max.apply(null, max)
}
console.log(findMax(tree))


// for (let i=0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }


export function App() {
    return <>
        recursion
    </>
}