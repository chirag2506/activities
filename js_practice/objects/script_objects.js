console.log("Hello all");

// Creation
// //Way 1:Creating Objects using Object literals

// let user = {} //Empty Object
// console.log(user);
// console.log(typeof user);


// //declare an object
// let user = {
//     name : 'Bob',
//     age : 21,
//     email : 'bob@gmail.com',
//     location : ['USA, INDIA'],
//     login : function(){
//         console.log('The user Logged in');
//     },
//     logout : function(){
//         console.log('The user logged out');
//     }
// }
// console.log(user);


// //get specific value using dot operator
// console.log(user.name);
// console.log(user.age);
// console.log(user.email);
// console.log(user.location);


// //get specific value using square brackets
// console.log(user['name']);
// console.log(user['age']);
// console.log(user['email']);
// console.log(user['location']);


// //Objects are mutable
// user.age = 31;
// console.log(user);


// //If we want to access the value using variable then we have to use square brackets
// let key = 'location';
// console.log(user[key]);
// console.log(user.key); // print undefined


// // //Invoking a Function
// user.login();
// user.logout();

/**********************************************************************************/

// //What if we want to access the property of an object in a function

// let user1 = {
//     name : 'crystal',
//     logName : function() {
//         console.log('My name is',this.name); //this points to a current object
//     }
// }
// user1.logName();

/**********************************************************************************/

//Can we store objects in an array?

// const array1 = [
//     {name : 'Amy' , age : 15},

//     {name : 'Bob' , age : 21}
// ];
// console.log(array1);

/**********************************************************************************/
/**********************************************************************************/

// Way 2:  By creating instance of Object

// var emp = new Object();
// emp.id = 101;
// emp.name = "Bob";
// emp.salary = 50000;
// console.log(emp.id+" "+emp.name+" "+emp.salary);

/**********************************************************************************/
/**********************************************************************************/

// Way 3: By using an Object constructor

// function emp1(id, name, salary){
//     this.id = id;
//     this.name = name;
//     this.salary = salary;
// }

// e = new emp1(1, "Bob", 30000);

// console.log(e.id+" "+e.name+" "+e.salary);

/**********************************************************************************/

//Object.keys() Method
//Object.keys(obj) returns an array of a given object's keys

// var obj = {
//     1: "a",
//     2: "b",
//     3: "c"
// };
// var keys = Object.keys(obj);
// console.log(keys); // ["1", "2", "3"]

/**********************************************************************************/

//Object.values() Method
////Object.values(obj) returns an array of a given object's values

// var obj = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.values(obj)); // ['a', 'b', 'c']


/**********************************************************************************/

// //The Object.entries() method returns an array of key/value pairs for the given object.

// const obj = {
//     one: 1,
//     two: 2,
//     three: 3
// };
// var a = Object.entries(obj);
// console.log(a);

/*********************************************************************************/

// //Object.getOwnPropertyDescriptor() method gives the description of a specific property in an object.

// var sampleObject = {
//     hello: 'world',
//     age: 12
// };
// var t = Object.getOwnPropertyDescriptor(sampleObject, 'hello');
// console.log(t);

/*********************************************************************************/

// //Object.defineProperty() method allows us to define a property in an existing object.

// var obj = {};
// Object.defineProperty(obj, 'name', { value: 'Bob', writable: true });
// console.log(obj.name);
// Object.defineProperty(obj, 'age', {value: 31, writable: false, enumerable: false})
// console.log(obj.age);
// obj.age = 43;
// obj.name = "Steve";
// console.log(obj.name)
// console.log(obj.age);
// console.log(obj);

/*********************************************************************************/
/*********************************************************************************/

//Math Object
//The math object is the built-in object. It allows us to perform mathematical tasks on numbers.

// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;
// console.log(Math.round(area)); //round method rounds the number to its nearest integer
// console.log(Math.floor(area)); //floor method rounds down to its nearest integer
// console.log(Math.ceil(area)); //ceil method rounds up to its nearest integer

/*****************************************************************************************************/

// //Application
// script_obj_application.js