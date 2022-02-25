console.log("Hello All");

// //Measuring Time
// console.time('time1');
// console.timeEnd('time1');
// console.time('time2');
// var x = 10;
// var y = 20;
// var z = x+y;
// console.log(z);
// console.timeEnd('time2');
// console.time('time3');
// for (let index = 0; index < 10000; index++) {
//     z+=index;
// }
// console.timeEnd('time3');
// console.time('time4');
// alert("This is alert for measuring time");
// console.timeEnd('time4');

// //Formatting
// console.log("%s has scored %i marks out of %f", "Chirag", 98.7, 100.5);
// console.log("%o - This is a  DOM element", document.getElementById("DOMdemonstrationFormatting").innerHTML);
// console.log("%O - This is JS object", {"a": "b"});
// console.log("%cHello", "color:blue; font-size:large");
// console.group();
// console.log("hello1");
// console.log("hello2");
// console.log("hello3");
// console.groupEnd;
// console.groupCollapsed();
// console.log("hello1");
// console.log("hello2");
// console.log("hello3");
// console.groupEnd;

// //Other print methods
// console.info("this is info"); //not showing in chrome
// console.warn("this is warning");
// console.error("this is error");
// /*console.trace() prints the current stack trace (basically, how it was reached).
// also works like console.log() if used in global scope*/
// function second(){
//     first();
// }
// function first(){
//     console.trace();
// }
// second();

// //Tables
// var x = ['Hello', 'world']
// console.log(x);
// console.table(x);
// console.table({ foo: 'bar', bar: 'baz' });
// var personArr = [
//     {
//         "personId": 123,
//         "name": "Jhon",
//         "city": "Melbourne",
//         "phoneNo": "1234567890"
//     },
//     {
//         "personId": 124,
//         "name": "Amelia",
//         "city": "Sydney",
//         "phoneNo": "1234567890"
//     },
//     {
//         "personId": 125,
//         "name": "Emily",
//         "city": "Perth",
//         "phoneNo": "1234567890"
//     },
//     {
//         "personId": 126,
//         "name": "Abraham",
//         "city": "Perth",
//         "phoneNo": "1234567890"
//     }
// ];
// console.table(personArr, ['name', 'personId']);

// //Console count
// console.count(1);
// console.count('1');
// console.count(2);
// console.count("1");
// console.count("3");
// console.count("2");
// //function point to global Function object
// console.count(console.constructor);
// console.count(function(){});
// console.count(Object);
// var fn1 = function myfn(){};
// console.count(fn1);
// console.count(Number);
// //certain objects get specific counters associated to the type of object they refer to
// console.count(undefined);
// console.count(document.Batman);
// var obj;
// console.count(obj);
// console.count(Number(undefined));
// console.count(NaN);
// console.count(NaN+3);
// console.count(1/0);
// console.count(String(1/0));
// console.count(window);
// console.count(document);
// console.count(console);
// console.count(console.__proto__);
// console.count(console.constructor.prototype);
// console.count(console.__proto__.constructor.prototype);
// console.count(Object.getPrototypeOf(console));
// console.count(null);
// //empty or absent string
// console.count();
// console.count('');
// console.count("");
// console.count(1);
// console.count();
// console.count();

// //Clearing console
// console.clear();

// //Assertion
// console.assert('one' === 1);
// console.assert(1=='1'); //does nothing if true
// console.assert(1==='1');
// console.assert(NaN);
// console.assert(undefined);
// console.assert(null);
// console.assert(true);
// console.assert(false);
// console.assert(true, "hello this is true");
// console.assert(false, "hello this is false");