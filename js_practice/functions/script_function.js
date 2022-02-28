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