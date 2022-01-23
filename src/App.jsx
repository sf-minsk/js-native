import React from "react";
//test
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
// const tree = {
//     value: 5,
//     left: {
//         value: 10,
//         left: {
//             value: 4,
//         },
//         right: {
//             value: 7,
//         },
//     },
//     right: {
//         value: 11,
//         left: {
//             value: 3,
//         },
//         right: {
//             value: 2,
//         },
//     },
// };
//
// const findMax = (obj: any) => {
//     let max: number[] = []
//     Object.values(obj).map(el => typeof el === 'number' ? max.push(el) : max.push(findMax(el)))
//     return Math.max.apply(null, max)
// }
// console.log(findMax(tree))


// for (let i=0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }


// function arrayDiff(a, b) {
//     let arr = a
//     for (let i = 0; i < b.length; i++) {
//         arr = arr.filter((el: any) => el !== b[i])
//     }
//     return arr
// }
//
//
// console.log(arrayDiff([1, 2, 3], [1, 2, 3]))
//
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, i * 1000)
// }

//
// (async () => {
//     const method = async  () => 10;
//     console.log(1);
//     () => {
//         console.log(2)
//     };
//     setTimeout(() => {
//         console.log(3)
//     });
//     (_ => console.log(_, 4))();
//     (()=> console.log(5))();
//     () => console.log(6);
//     (_ => console.log(_, 7))(8);
//     console.log(await method())
//     return 9
// })().then(console.log)

// function Main() {}
// Main.prototype = {protection: true}
// Main.prototype = {protection: false}
// @ts-ignore
//const obj = new Main()
//Main.prototype = {protection: false}
//Main.prototype.protection = false
//console.log(obj.protection)

// let a = 3
//   const foo = async () => {
//      console.log(a)
//      a = 5
//  }
//  foo()
// var myVar = "Andrey"
// function myFunc() {
//     let myVar = "Nick"
//     var myVar = "John"
//     console.log(myVar)
// }
// console.log(myVar)
// myFunc()


// function f1() {
//     let a = 10
//     f2(a)
// }
//
// function f2(arg: any) {
//     console.log(arg)
// }
//
// f1()
// var a = {
//     index1: 1,
//     index2: 2,
//     index3: 3,
//     index4: 4,
//     index5: 5,
//     index6: 6,
//     index7: 7,
//     index8: 8,
//     index9: 9,
// };
// console.log( a );
// setTimeout(() => {
//     a.index1++;
//     a.index2++;
//     a.index3++;
//     a.index4++;
//     a.index5++;
//     a.index6++;
//     a.index7++;
//     a.index8++;
//     a.index9++;
// })

// const f1 = () => {
//     console.log('1.1')
//     setTimeout(() => {
//         console.log('1.2')
//     })
//     console.log('1.3')
// }
// const f2 = () => {
//     console.log('2')
// }
// f1()
// f2()
// console.log('3')

// let a = 1
// const f1 = () => {
//     console.log(a)
//     let a = 2
// }
// f1()


/*
Написать свою функцию bind
Пример работы:

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: "Михаил", age: 22, job: "Frontend"}
const person2 = {name: "Елена", age: 19, job: "SMM"}

bind(person1, logPerson)
bind(person2, logPerson)
 */


// function bind(context: any, fn: any) {
//     context.__proto__.newFn = fn
//     return context.newFn()
// }
// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }
// const person1 = {name: "Михаил", age: 22, job: "Frontend"}
// const person2 = {name: "Елена", age: 19, job: "SMM"}
// bind(person1, logPerson)
// bind(person2, logPerson)


// function fn() {
//     console.log(this.name);
// }
// let a = {
//     name: "Huinya"
// }
// Function.prototype.newBind = function (context) {
//     context.newBind = this
//     return function() {return context.newBind()}
// }
// fn.newBind(a)()


// @ts-ignore
// let pr1 = new Promise(res => {
//     res()
// })

// const pr = new Promise<void>((res) => {
//     res()
// }).then(res => {
//     console.log(res)
// })
// console.log(pr);
//
// const pr1 = new Promise((res) => {
//     setTimeout(() => {
//         res(5)
//     }, 1000)
// }).then((res) => res).then().then(console.log)


// var arr = []
// for (var i = 0; i < 10; i++) {
//     // @ts-ignore
//     function foo(a: number) {
//         return () => {console.log(a * 3)}
//     }
//     arr.push(foo(i))
// }
// console.log(arr[0]())
// console.log(arr[1]())
//
//


// @ts-ignore
// function deepCount(a){
//     let lengthArr = a.length
//     // @ts-ignore
//     // eslint-disable-next-line array-callback-return
//     a.map(el => {
//         if (Array.isArray(el)) {
//             lengthArr +=deepCount(el)
//         }
//     })
//     return lengthArr
// }
//
//
// console.log(deepCount([])); //"Expected 0"
// console.log(deepCount([1, 2, 3])); //"Expected 3"
// console.log(deepCount(["x", "y", ["z"]])); //"Expected 4"
// console.log(deepCount([1, 2, [3, 4, [5]]])); //"Expected 7"
// console.log(deepCount([[[[[[[[[]]]]]]]]])); //"Expected 8"

// function foo() {
//     console.log(arguments)
// }

// @ts-ignore
// foo(1,2)

// for (let i = 0; i < 3; i++) {
// setTimeout(function () {
//     console.log(i)
// }, 1000)
// }

// let request1 = new Promise((resolve, reject) => {
//     resolve('request 1 resolved')
// })
// let request2 = new Promise((resolve, reject) => {
//     reject('request 2 rejected')
// })
// let request3 = new Promise((resolve, reject) => {
//     reject({value: 1})
// })

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
// const pr = request1.then((data) => data)
// console.log(pr)

// Promise.allSettled([request1, request2, request3])
//     .then(res => {
//         console.log(res)
//     })
// console.log(Promise.resolve(100).then(console.log));


// let length = 100
// function showLength() {
//     console.log(this.length)
// }
// showLength()
//
// const obj = {
//     length: 200,
//     showLength: function (fn, fn2, a, a, c) {
//         fn()
//         fn.call(this)
//         fn2()
//         arguments[0]()
//         arguments[1]()
//     }
// }
// showLength()
// obj.showLength(showLength, showLength.bind(obj), 1, 2, 3)

// let newObj = {
//     name: 'test'
// }
// console.dir(newObj)
// const obj = {
//     name: 'test',
//     age:
// }
// const newObj = Object.create(obj, {age: {value: 30}, city: {value: 'Minsk'}})
// console.log(Object.keys(newObj));
// console.log(obj)

// var a = 10
// function foo() {
//     console.log(a)
// }
// function bar() {
//     var a = 20
//     foo()
// }
// bar()


// function foo() {
//     // @ts-ignore
//     console.log(this)
//     function bar() {
//         // @ts-ignore
//         console.log(this)
//     }
//     bar()
// }


// function foo() {
//     function foo1() {
//         function f2() {
//             console.log(this)
//         }
//         f2()
//         let f3 = () => {
//             console.log(this)
//         }
//         f3()
//     }
//     foo1()
// }
// foo()
//
//
//
// let obj = {
//     innerObj: {
//         a: function () {
//             console.log(this)
//             return () => {
//                 console.log(this)
//             }
//         },
//         b: () => {
//             console.log(this)
//         }
//     }
// }
//
// const u = obj.innerObj.a()
// u()
// obj.innerObj.b()


// let obj = {
//     innerObj: {
//         a: function () {
//             console.log(this)
//             return () => {
//                 console.log(this)
//             }
//         },
//         b: () => {
//             console.log(this)
//             return function () {
//                 console.log(this)
//             }
//         }
//     }
// }
//
// const u = obj.innerObj.a()
// u()
// obj.innerObj.b()()

// let pr = Promise.reject('Error')
// let pr1 = pr.finally(()=>{})
//
// console.log(pr === pr1);
//

// Promise.all([1,2]).then(console.log)

// let pr1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej(1)
//     }, 1000)
// })
// let pr2 = new Promise((res, rej) => {
//     rej(2)
// })
// let pr3 = new Promise((res, rej) => {
//     rej(3)
// })
// let pr4 = new Promise((res, rej) => {
//     res(4)
// })
//
// let pr = Promise.any([pr1, pr2, pr3, pr4])
// console.log(pr)
//
//
// function foo() {
//     console.log(b)
// }
// foo()
// let b = 10

// function sum(n1) {
//     let Count = 1
//     let Sum = 0
//     Count++
//     Sum += n1
//     if(Count === 0) {
//         console.log(Sum)
//     } else {
//         return function (n2) {
//             sum(n2)
//             console.log(Sum)
//         }
//     }
// }
// sum(1)(2)

// let arrow = () => console.log('2')
//
// arrow()

// let obj = {
//     name: 'Alex',
//     logg: function () {
//         console.log(this)
//     },
//     logg2: function () {
//         obj.logg()
//     }
// }
// let foo = obj.logg2
// foo()

// const f1 = () => {
//     return 1
// }
// const f2 = () => {
//     throw new Error('2')
// }
//
//
// async function foo() {
//     try {
//         let a = await f1()
//         let b = await f2()
//     } catch(err) {
//         console.log(err)
//     }
// }
// foo()

// let obj = {
//     name: 'Alex',
//     foo() {
//         return () => {
//             return () => {
//                 return function () {
//
//                 }
//             }
//         }
//     }
// }
// obj.foo()()()


// let obj = {
//     f1() {
//         console.log(this)
//     },
//     f2: () => {
//         console.log(this)
//     },
//     f3: function () {
//         console.log(this)
//     }
// }
// obj.f1()
// obj.f2()
// obj.f3()

// let a = 1
// let b = 2
// let c = 3
// let d = 4
// a = b = c = d = 2
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// interface ICar {
//     mark: string
//     year: number
//     engine: number
// }
//
// class Car implements ICar {
//
//     constructor(public mark: string, public year: number, public engine: number) {
//         this.mark = mark
//         this.year = year
//         this.engine = engine
//     }
//     drive() {
//         console.log(`${this.mark} run`)
//     }
// }
//
// class SportCar extends Car implements ICar{
//     sportCar: boolean
//     constructor(public mark: string, public year: number, public engine: number) {
//         super(mark, year, engine);
//         this.sportCar = true
//     }
//     fastDrive() {
//         console.log(`${this.mark} run in space`)
//     }
// }
//
// let toyota = new Car('Toyota', 1995, 2.0)
// let honda = new SportCar('Honda', 2021, 5.5)
// console.log(toyota)
// console.log(honda)
//
// let obj = {
//     'name': 'Alex',
// }
// console.log(obj)
// obj['name'] = 'Hello'
// console.log(obj)
//
// Symbol.toPrimitive(obj)

// const a = (x,y) => {
//
//     console.log(y)
//
//     return {
//         obj: (z) => {
//             a(y,z)
//         }
//     }
// }
//
// const res = a(1)
// res.obj(2)
// res.obj(3)
// res.obj(4)

// let peoples = {
//     alex: {
//         age: 21,
//         city: 'Minsk',
//     },
//     dima: {
//         age: 24,
//         city: 'Gomel',
//     },
//     andrey: {
//         age: 30,
//         city: 'Borisov',
//     },
//     sayHi: function() {
//         console.log('Hello')
//     }
// }
// console.log(Object.entries(peoples))
// let str = 'Hello'
// console.log(...str.toString())

// document.getElementById()

// import ReactDOM from 'react-dom'
//
// export const YoutubeVideo = () => {
//     return <div>
//         <VideoHeader />
//         <VideoContent />
//         <VideoStatistics />
//     </div>
// }
// export const VideoHeader = () => {
//     return <div>
//         😀 Заголовок видео
//     </div>
// }
// export const VideoContent = () => {
//     return <div>
//         📼 Контент видео
//     </div>
// }
// export const VideoStatistics = () => {
//     return <div>
//         📊 Статистика лайков
//     </div>
// }
//
// ReactDOM.render(<div><YoutubeVideo/></div>,
//     document.getElementById('root')
// );
//
//
//
//
// type PropsType = {
//     city: string
//     country: string
//     coords?: string
// }
// // 'belarus', 'minsk', '53.917501,27.604851'
// export const Wrapper1 = () => {
//     return <PropsComponent1 city='minsk' country=''/>
// }
//
// export const PropsComponent1: React.FC<PropsType> = (props) => {
//     return <div>hello</div>
// }


// import ReactDOM from 'react-dom'
//
// export const VideoHeader = (props: {videoName: string}) => {
//     return <div>
//         😀 {props.videoName}
//     </div>
// }
// export const VideoContent = (props: {videoContent: string}) => {
//     return <div>
//         📼 <a href={props.videoContent}>{props.videoContent}</a>
//     </div>
// }
// export const VideoDescription = (props: {videoDescription: string}) => {
//     return <div>
//         📑 {props.videoDescription}
//     </div>
// }
//
// export const YoutubeVideo = (props: any) => {
//     return <div>
//         <VideoHeader videoName={props.title} />
//         <VideoContent videoContent={props.link} />
//         <VideoDescription videoDescription={props.description} />
//     </div>
// }
//
// export const App = () => {
//     const video = {
//         title: 'Samurai way',
//         link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
//         description: 'Best free react-course'
//     }
//
//     return <YoutubeVideo video={video} />
// }
//
// ReactDOM.render(<App />,
//     document.getElementById('root')
// );


// import ReactDOM from 'react-dom'
//
// const state = {
//     dialogs: [
//         {id: 'user1', firstName: 'Ivan Ivanov'},
//         {id: 'user2', firstName: 'Petr Petrov'}],
//     messages: [
//         {id: 'm1', body: 'Hello', from: {id: 'user1'}},
//         {id: 'm2', body: 'Ha-ha', from: {id: 'user2'}},
//         {id: 'm3', body: 'How are you?', from: {id: 'user1'}},
//         {id: 'm4', body: 'Hey!!!', from: {id: 'user1'}},
//     ],
//     selectedDialogId: 'user1'
// }
// type StateType = typeof state
//
// export const Dialogs = (props: { dialogs: Array<{ id: string, name: string }>, selectedDialogId: string }) => {
//     return <ul>
//         {props.dialogs.map(i => <li
//             key={i.id}
//             style={{backgroundColor: props.selectedDialogId === i.id ? 'grey' : 'white'}}>
//             {i.name}
//         </li>)}
//     </ul>
// }
// export const Messages = (props: { messages: Array<{ id: string, body: string, username: string }> }) => {
//     return <ul>
//         {props.messages.map(i => <li key={i.id}><b>{i.username}: </b> {i.body}</li>)}
//     </ul>
// }
//
// export const App = (props: any) => {
//     const users = props.users
//     const messages = props.messages
//     const activeDialogId = props.userId
//
//     const findUsername = (userId: string) => {
//         let foundDialog = users.find((d: any) => d.id === activeDialogId)
//         if (!foundDialog) return 'unknown'
//
//         return foundDialog.firstName
//     }
//
//     return <>
//         <Dialogs dialogs={users.map((d: any) => ({id: d.id, name: d.firstName}))} selectedDialogId={activeDialogId} />
//         <Messages messages={messages
//             .filter((m: any) => m.from.id === activeDialogId)
//             .map((m: any) => ({id: m.id, body: m.body, username: findUsername(m.from.id)}))}/>
//     </>
// }
//
// ReactDOM.render(<App XXX />,
//     document.getElementById('root')
// )

// function minMax(items) {
//     return items.reduce((acc, val) => {
//         acc[0] = (acc[0] === undefined || val < acc[0]) ? val : acc[0]
//         acc[1] = (acc[1] === undefined || val > acc[1]) ? val : acc[1]
//         return acc;
//     }, []);
// }
//
// let result = minMax([1, 5, 12, 8, -6, 3])
// console.log(result)

// let obj = {
//     name: 'Alex',
//     age: 31,
//     location: {
//         country: 'Belarus',
//         city: 'Minsk',
//     },
// };
//
// for (let key in obj) {
//     console.log(obj[key])
// }

// let date = new Date(2021, 12, 1)
// console.log(date)

// let str = 'Hello my little world witch I hate'
//
// console.log(str.split(' '));

// let arr = [1, 5, 3, 7, 3, 4, 6, 3, 5, 5]
// console.log(arr)
//
// {
//     [arr[3], arr[4]] = [arr[4], arr[3]]
// }
//
// console.log(arr)

// let a = 1
// let b = 2;
// console.log(a, b)
// eslint-disable-next-line no-lone-blocks
// {
//     [a, b] = [b, a]
// }
//
// console.log(a, b)

// function checkBrackets(str) {
//     let leftCount = 0
//     let rightCount = 0
//     str.split('').forEach(el => {
//         if (el === '(') {
//             leftCount++
//         } else if (el === ')') {
//             rightCount++
//         }
//     })
//     return leftCount === rightCount;
// }
//
// console.log(checkBrackets('()()()()((((()))))))((()'))

// class NewClass {
//     #_className = 'newClass'
//
//     constructor(name) {
//         this.name = name
//     }
//
//     get getClassName() {
//         return this.#_className
//     }
// }
//
// let newObj1 = new NewClass('OBJ1')
// let newObj2 = {a: 1, b: 2}
// console.log(newObj2)
//
// let testObj = Object.assign(newObj2, newObj1)
// console.log(newObj2)

// let obj = {
//     name: 'oobbjj',
//     f1() {
//         console.log(this.name)},
//     a1: () => {
//         console.log(this.name)
//     },
//     c: this.name,
// }
// obj.f1()
// obj.a1()
// console.log(obj.c)

// let obj1 = {
//     name: 'obj1',
//     f1: () => {
//     },
//     f2() {
//     },
//     f3: function () {
//     }
// }
//
// let obj2 = Object.create(obj1)
//
// Object.defineProperties(obj2,
//     {
//         name1 : {value: 'name1', enumerable: true}, name2 : {value: 'name2'}
//     }
// )
//
// console.log(obj1.valueOf())
// console.log(obj1)


export function App() {
    let handler = () => {
        let conf = window.confirm('hello?')
        alert(conf)
    }
    return <>
        recursion
        <button onClick={handler}></button>
    </>
}


// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// let test = arr.reduce((acc, el) => {
//     console.log(acc)
//     return acc + el
// })
// console.log(test, 'answ')

//console.log(Math.max(...arr));
//console.log(arr.reduce((acc, el) => acc + el));
// let newArr = arr.entries()
// console.log(newArr.next());
// console.log(newArr.next());
// console.log(newArr.next());
// console.log(newArr.next());
// console.log(newArr.next());
// console.log(newArr.next());

// let value = 0
// arr.forEach(el => {
//     value += el
// })
// console.log(value)

// let obj = {
//     name: 'Alex'
// }
// console.log(obj['name'])

// let str = '10,20,30'
// let arr = str.split(',')
// console.log(arr)

// let obj = {
//     1: 1,
//     '2': 2,
//     Three: 3,
//     'Four': 4,
// }
// console.log(obj[1])
// console.log(obj[2])
// console.log(obj['Three'])
// console.log(obj['Four'])

// let str = '1'.toString()
// console.log(str + 2)
// let a = !!'2' === true
// let b = 1 === 1
//
// console.log(a === b)


// console.dir([1] + true)

// let pr1 = new Promise((res) => res(10))
// let pr2 = new Promise((res) => res(20))
// let pr3 = new Promise((res, rej) => rej(30))
//
// let response = Promise.allSettled([pr1, pr2, pr3])
// console.log(response)
// response.then(console.log)

// console.log(Number(['sdas']));

// for (let i = 0; i<10; i++) {
//     setTimeout(function () {console.log(i)}, 10)
// }

// const a = 3
// a.__proto__.sayHi = function () {
//         console.log('aaa')
// }
//
//
//
// a.sayHi()
//
// Number.prototype.sayHi()

// async function foo(arg) {
//     if (arg === 1) {
//         return Promise.reject('Error')
//     } else {
//         return new Error()
//     }
// }
// let a = foo(1)
// console.log(a)

// function Test(name) {
//     return {xx: this}
//     this.name = name
//
// }
//
// let a = new Test('Hello')
// console.log(a)
// class Test {
//     constructor(name) {
//         this.name = name
//     }
// }
// let newVar = new Test('Alex')
// console.log(newVar)

// class User {
//     constructor() {
//         this.name = 'Alex'
//         this.sayHi = function () {
//             console.log('HI')
//         }
//     }
//     sayBye = function () {
//         console.log(this.name)
//     }
// }
//
// let user = new User()
// let user2 = new user.__proto__.constructor()
//
// console.log(user)
// console.log(user2)


// let obj = {
//     name: 'Alex',
//     age: 22
// }
//
// console.log(Object.getOwnPropertyDescriptors(obj));

// let i = 10
//
// i *= 3
// console.log(i)

// let a = 10;
// let b = 20;
// [a, b] = [b,a]
// console.log(a,b)

// let arr = [12,34,56,21,2,3,1]
//
// arr.sort((a,b) => a-b)
//
// console.log(arr)

// function Bike(model, color) {
// //     this.model = model;
// //     this.color = color;
// // }
// //
// // Bike.prototype.getDetails = function () {
// //     return this.model + 'bike has' + this.color;
// // }
// //
// // class Bike2 {
// //     constructor(model, color) {
// //         this.model = model;
// //         this.color = color;
// //     }
// //     getDetails() {
// //         return this.model + 'bike has' + this.color;
// //     }
// // }

// let obj = {
//
// }
//
// let isEmpty = (o) => {
//     return Object.keys(o).length > 0;
// }
// console.log(isEmpty(obj))

// let str = 'hello'
// let arr = str.split('')
// arr[0] = arr[0].toUpperCase()
// console.log(arr.join(''))

// let str = 'alexander'
//
//
// console.log(str[0].toUpperCase() + str.slice(1,4))

// let arr = [12,34,1,3,6,8,34,65,12,22,21,1,2,3,56,21,2,3,1]
// console.log(arr)
// let newSet = new Set(arr)
// let newArr = []
// newSet.forEach(el => newArr.push(el))
// console.log(newArr.sort((a,b) => a-b))

// let arr = [12,34,1,3,6,8,34,65,12,22,21,1,2,3,56,21,2,3,1]
// arr.length = 0
// console.log(arr)


// let a = {}
// a.__proto__ = 'das'
// console.log(a.__proto__)

// let newPromise1 = new Promise((res, rej) => res({}.toString()))
// newPromise1.then((res) => {
//     return Promise.reject(res)
// }).catch(reason => {
//     console.log(reason)
// })

// let inGrade = (number, grade) => {
//     if (grade === 0) {
//         return 1
//     }
//     if (grade < 0) {
//         console.log('Error')
//         return
//     }
//     if (grade === 1) {
//         return number
//     } else {
//         return number * inGrade(number, grade -1)
//     }
// }
//
// console.log(inGrade(2,3))

// function solution(number) {
//     if (number < 0) {
//         return 0
//     }
//     let arrOfNums = []
//     for (let i = 1; i < number; i++) {
//         arrOfNums.push(i)
//     }
//     let arrOfMultNums = []
//     arrOfNums.forEach((el) => {
//         if (el % 3 === 0) {
//             arrOfMultNums.push(el)
//         }
//         if (el % 5 === 0) {
//             arrOfMultNums.push(el)
//         }
//     })
//     return [...new Set(arrOfMultNums)].reduce((acc, el) => {
//         acc += el
//         return acc
//     })
// }
//
// console.log(solution(10))

// function solution(number) {
//     if (number < 0) return 0
//     let sum = 0
//     for (let i = 1; i < number; i ++) {
//         if (i%3 === 0 || i%5 === 0) sum += i
//     }
//     return sum
// }
//
// console.log(solution(30))

// const obj = {
//     name: 'Marta'
// }
//
// console.log(obj)
// obj.name = 'Alex'


// let newPromise = new Promise((res, rej) => rej(1))
//
// newPromise.then(res => console.log('resolve', res), rej => console.log('reject', rej)
// )


// let sqrt = (value, grade) => {
//     if (grade === 0) {
//         return 1
//     }
//     if (grade === 1) {
//         return value
//     }
//     return value * sqrt(value, grade - 1)
// }
// console.log(Number(sqrt(2, 1023)))
//
//
// let foo = (a) => (b) => a + b
//
// let foo1 = foo(3)
// console.log(foo1(2));

// console.log(Number.isNaN(NaN));
//
// let foo = (...args) => {
//     args.forEach((el) => {
//         console.log(el)
//     })
// }
// foo(1,2,3,5)


// console.dir(() => {})
// console.dir(function (){})
//
// class Man {
//     constructor() {
//     }
// }
//
// var num = 2


// function sum(...args) {
//     let sum = 0;
//     let newArguments = [...arguments]
//     newArguments.forEach((el) => {
//         sum += el
//     })
//     console.log(sum)
//     return function() {
//
//     }
// }
//
// sum(20) //20
// sum(8,12) //20
// sum(5,4,9,2) //20
// sum(1,3,4,2,1,4,5) //20
// sum(8)(12) //20
// sum(5)(4)(9)(2) //20
// sum(1)(3)(4)(2)(1)(4)(5) //20
// sum(5,4)(9,2) //20
// sum(1,3)(4,2)(1,4,5) //20
// 12
//
// let arr = [72, 45, 98, 34, 56, 85, 33, 65, 43, 22, 53, 75, 11]
//
// let arrSort = (arr) => {
//     let first = arr[0]
//     let second = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < first) {
//             second = first
//             first = arr[i]
//         }
//     }
//     return [first, second]
// }
//
// console.log(arrSort(arr))


// let obj = {
//     name: {value: 'Alex', enumerable: false},
//     age: 22,
//     sayHi() {
//         alert('Hello')
//     }
// }
// let obj2 = Object.create(null, {name: {value: 'Alex', enumerable: false}})
//
// console.log(Object.getOwnPropertyNames(obj2))
// console.log(Object.keys(obj2))




// class Obj {
//     constructor(a) {
//         this.name = a
//         this.name2 = this.name
//     }
// }
//
// console.log(new Obj('Alex'))
//
// let pr1 = Promise.resolve(1)
// console.log(pr1)

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
// let newArr = arr.splice(4,0,0)
// console.log(arr)
// console.log(newArr)

var a = 5
function f() {
    console.log(a)
    if (a) {
        console.log(a)
        var a = 10
    }
}
f()


















