console.log("Hello");

// //Scoping
// //eg 1
// function foo() {
//     var a = 'hello';
//     console.log(a);
// }
// console.log(a);
// //eg 2
// function foo() {
//     var a = 'hello - a';
//     function bar() {
//         var b = 'world - b';
//         console.log(a);
//         console.log(b);
//     }
//     bar();
//     console.log(a);
//     console.log(b);
// }
// foo();
// bar();
// console.log(a);
// console.log(b);

// //Currying
// //Currying is the transformation of a function of n arity or arguments into a sequence of n functions taking only one argument.
// //Use cases: When the values of some arguments are available before others, you can use currying to decompose a function into a
// //series of functions that complete the work in stages, as each value arrives. This can be useful:
// //1) When the value of an argument almost never changes (e.g., a conversion factor), but you need to maintain
// //the flexibility of setting that value (rather than hard-coding it as a constant).
// //2) When the result of a curried function is useful before the other curried functions have run.
// //3) To validate the arrival of the functions in a specific sequence.
// var prism1 = function (l, w, h) {
//     return l * w * h;
// }
// //after currying
// function prism2(l) {
//     return function (w) {
//         return function (h) {
//             return l * w * h;
//         }
//     }
// }

// var prism3 = l => w => h => l * w * h;

// var sum = function(a){
//     return function(b){
//         return a+b;
//     }
// };

// var addToFive = sum(5)

// console.log(addToFive(4));

// //Extra Example
// function foo() {
//     let a = b = 0;
//     a++;
//     console.log(a)
//     console.log(b)
//     return a;
//   }
// foo();
// console.log(typeof a) 
// console.log(typeof b)

// //Immediately Invoked Function Expressions
// //The function itself and any internal variables will be inaccessible from outside (cannot be called)
// (function a() {
//     console.log("I am a");
// }());
// //or
// (function b() {
//     console.log("I am b");
// })();
// //or
// (() => console.log("Hello!"))();
// a();

// //Variadic Functions
// function var1() {
//     for (let index = 0; index < arguments.length; index++) {
//         console.log(arguments[index]);

//     }
// }
// var1(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

// function var2(person, ...msg) {
//     msg.forEach(arg => {
//         console.log(person, 'say', arg);
//     });
// }
// var2('I', 'hello', 'bye');

// const var3 = (...args) => console.log(args)
// const list = [1, 2, 3]
// var3('a', 'b', 'c', ...list)