console.log("Hello All");

// //String Initializations
// var s1 = "hello1"; 
// console.log(s1);
// var s2 = 'hello2'; 
// console.log(s2);
// var s3 = `hello3`; 
// console.log(s3);
//new String()

// //Template Literals and interpolation
// var greeting = "bye";
// var myName = "Chirag";
// var helloToYou = `I say ${greeting} to ${myName}`;
// console.log(helloToYou);

// //Concatenation
// var friend = "friend";
// var concat1 = "hello " + friend + ", how are you?"
// console.log(concat1);
// var concat2 = "hello ".concat(friend, ", I am fine.");
// console.log(concat2)

// //Escape Characters: \n,\t,\\,\',\"
// console.log("this is line1 \\this is line2")

// //String Functions: 
// var str = "This is my String";
// console.log(str);
// //Length
// var length = str.length;
// console.log(length);
// //Concat
//Substring
// //str.slice()
// var substr1 = str.slice(1,6);
// console.log(substr1);
// console.log(str.slice(-8));
// console.log(str.slice(3));
// //str.substring() - cannot accept negative indexes
// var substr2 = str.substring(1,6);
// console.log(substr2);
// console.log(str.substring(-8));
// //str.substr()
// var substr3 = str.substr(1,6);
// console.log(substr3);
// //Index of
// //str.indexOf()
// console.log(str.indexOf('is'));
// // //str.lastIndexOf()
// console.log(str.lastIndexOf('is'));
// //Replace
// var newString = str.replace('String', 'new String');
// console.log(newString);
// //use of regular expression
// var str2 = "A string where string has more occurences than string in original string";
// var newString2 = str2.replace(/string/g, 'new String');
// console.log(newString2)
// //Change case
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// //Removing whitespaces
// var str3 = "                     string with spaces               ";
// console.log(str3);
// console.log(str3.trim());
// console.log(str3.trimStart());
// console.log(str3.trimEnd());
// //Character at index
// console.log(str.charAt(0));
// console.log(str.charAt(3));
// console.log(str[3]); //explain immutable
// //Convert into array
// var arr = str.split(' ');
// console.log(arr);
// var arr = str.split('');
// console.log(arr);
// //Repeting
// console.log(str.repeat(3));

//Reversing and comparing
function reverseString(){
    var str = document.getElementById("userString").value;

    var reversed = reverse(str)

    document.getElementById("reversedString").value = reversed;
}

function compareStrings(){
    var str1 = document.getElementById("string1").value;
    var str2 = document.getElementById("string2").value;

    var compare = lex_compare(str1, str2);

    // document.getElementById("compareResult").value = compare;
    if(compare<0){
        document.getElementById("compareResult").value = `${str1} is lexographically before ${str2}`;
    }else if(compare === 0){
        document.getElementById("compareResult").value = `${str1} is lexographically equal to ${str2}`;
    }else{
        document.getElementById("compareResult").value = `${str1} is lexographically after ${str2}`;
    }
}

function reverse(str){
    //function to reverse string
    return str.split('').reverse().join('');
}

function lex_compare(str1, str2){
    //function to compare strings
    return str1.localeCompare(str2);
}