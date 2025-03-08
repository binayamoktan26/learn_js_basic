// // console.log("hello world");
// // alert("click here");

// /*hello world
// multi line comments
//  */

// console.log("do you want money?");

// // variables (only char , num , $ _)

// // var , let , const

// var name; //creating a variable
// name = "nawang tashi lama"; // assigning value

// let add = "manthali";
// console.log(name, add);

// name = "tashi";
// console.log(name);

// const age = 22;
// console.log(age);

// let firstname = "binaya";
// let FirstName = "moktan";
// let FIRSTNAME = "TASHI";

//  JS operators

// arithmetic opetrator

// let a = 5;
// const b = 3;
// const c = b;
// + addition
// const result = a + b + c;
// - subtraction
// const result = a - b + c;
// *multiplication
// const result = a * c;
// **exponentation (ES2016)
// const result = a ** c;
//  /division
// const result = a / b;
// %Modulus (division reminder )
// const result = a % c;
// ++Increment
//a++;  // 6
// --decrement
// a--;
// console.log(a--);
// console.log(a);
// ==== Comparisons
// const v1 = 5;
// const v2 = 7;
//==
// const result = v1 == v2;
// ===
// const result = v1 === v2;
// > ,>=
// const result = v1 >= v2;
// < , <=
// const result = v1 < v2;
// const result = v1 <= v2;
// console.log(result);
// Logical Operators

// math object

// const answer = Math.PI;
//1 Math.round(4.7);
// const answer = Math.round(4.3);
//2 Math.pow(8,2);
// const answer = Math.pow(8, 2);
//3 Math.sqrt(64);
// const answer = Math.sqrt(25);
// 4. math.ceil(4.4);
// const answer = Math.ceil(4.3);
//5. math.floor(4.7);
// const answer = Math.floor(4.9);
//6.math.min(0, 150, 30, 20, -8 ,-200);
// const answer = Math.min(0, 150, 30, 20, -8, -200);
// 7. math.max(0,150, 30 , 20, -8, -200);
// const answer = Math.max(0, 150, 30, 20, -8, -200);

//8.math.random();

// const answer = Math.random() * 120; // 0 - 0.9999999999999999.......
// const ran = Math.round(answer);
// console.log(ran);

// let user = "nawang";
// console.log(user);
// const u1 = user;
// console.log(u1);

// user = "tashi";
// console.log(user);
// console.log(u1);

//reference data type
//object

// const user = {
//   fName: "nawang",
//   num: 26,
// };
// console.log(user);

// window.alert(33 );
//Data manipulation

//number / 0-9

// const num = 34_548_7343;
// console.log(num);
// const num = "6a";
// const val = +num;
// console.log(typeof val, val);

///  STRING AND ESCAPE CHARACTER
// escape character
// length
// indexoOf , lastIdexOf , search
// Slice ,substring , substr
// Replace, contact , trim
// toUpperCase , toLowerCase
// charAt , [] ,split
// const str = '  Hey this is nawang "tashi lama" , I live in Manthali ';
// console.log(str);
// const val = str.toLowerCase();
// const val = str.toUpperCase();
// const val = str[5];
// const val = str.charAt(5);
// const val = str.indexOf("nawang");

// const val = str.lastIndexOf("t");
// const val = str.replace("nawang", "Binaya");
// const val = str.replaceAll("i", "n");

// const val = str.slice(3, 5);

// const val = str.search("nawang");
// const val = str.split("i").join("i");

// const val = str.concat("Hello world ", "I love JavaScript");
// const val = str + "hello world";
// console.log(val);

//LOGICAL OPERATOR

//&&  , || , Ternary

//&&
// const age = 35;
// age < 45 && console.log("hello world ");

//   ||
// const age = 33;
// const val = age  "N/A";
// console.log(val);

//Ternary
//condition1 ? // statement1 : // statement 2
// const age = 23;
// age < 30 ? console.log("hey") : console.log("bye");

//truthy: true , 2 , -3, " ","hello world" , {}, [] , ()=>{}
//falsy : false , ,0 ,NaN, null , undefined

// JS - CONDITIONAL STATEMENTS
// 1 If
// 2 If else
// 3 Else if
// 4 Switch

// 1 If
// const val = !!"hello world";
// console.log(val);

// const age = 25;

// if (age >= 18 && age < 50) {
//   console.log("welcome to coding party ");
// }

//If else
// const age = 12;
// const vip = false;
// if ((age >= 18 && age <= 60) || vip === true) {
//   console.log("welcome to the party");
// } else {
//   console.log("no entry");
// }

//Else if condition
// const pet = "goat";

// if (pet === "cat") {
//   console.log("meow");
// } else if (pet === "dog") {
//   console.log("woff");
// } else if (pet === "goat") {
//   console.log("mya mya");
// } else {
//   console.log(" fje jek kjd jks kdks");
// }

// 4. Switch

// const pet = "goat";
// switch (pet) {
//   case "cat ":
//     console.log("meow");
//     break;
//   case "dog":
//     console.log("howu howu");
//     break;
//   case "goat":
//     console.log("mya mya");
//     break;
//   default:
//     console.log("hfk hfksal flkf");
// }

// what is array and how is array in JS ?

// Array []
// const val = ["nawang ", 26, "hello world ", null, undefined];
// console.log(val);
// Length , pish, pop, shift, unshift ,toString, join ,[ ], splice, slice, indexOf
// Short, reverse
// forEach, map
// Filter ,reduce ,every, find

//array
// const fruits = ["apple", "mango", "orange", "banana"];
// const value = fruits.length;
// const value = fruits[2];
//adding data
//in last using push                                                          .
// fruits.push("grapes");
// in first using unshift
// fruits.unshift("grapes");
// to add between first and last we use splice
// fruits.splice(2, 0, "grapes");
//DELETING THE ITEMS FROM THE ARRAY
//POP
//it is used to delet data from the last in array
// const val = fruits.pop();
//Shift
// it is used to delet a item from the begining in array
// const val = fruits.shift();
// const val = fruits.splice(2, 2);// delet the items from the array
// fruits[3] = "loving";
// const val = fruits.slice(1, 3); // it  make a another array between 1 to 3 excluding 1 and 3

// const val = fruits.toString(); to convert array to string
// const val = fruits.split(",");
// const val = fruits.indexOf("mango");
// const val = fruits.includes("kdfgjka");
// const val = fruits.join(" //");
// console.log(fruits.sort());
// fruits.reverse();
// console.log(fruits);

// Loop
// for (let i = 1; i < 4; i++) {
//   console.log(i);
// }
//while loop

// let i = 1;
// while (i <= 6) {
//   console.log(i);
//   i++;
// }

// Do while loop () do
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// continue

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) continue;
//   else;
//   console.log(i);
// }

// JS specific loop
//for /of for (x of cars ) for array

// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// const upperFruites = [];
// for (let items of fruits) {
//   upperFruites.push(items.toUpperCase());
// }
// console.log(upperFruites);

// for in loop

//forEach
// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// const newData = fruits.forEach((fruit, index) => {
//   console.log(index, fruit);
// });
// console.log(newData);

// map()
// let arr = [1, 2, 4, 74, 8, 7];
// let newArr = arr.map((val, index) => {
//   console.log(val);
//   return "hello world";
// });
// console.log(newArr);

// filter()
// let arr = ["red", "yellow", "blue", "green", "black", "white"];
// let newArr = arr.filter((value, index) => {
//   if (value.includes("n")) return true;
//   else return false;
// });
// console.log(newArr);

// another method
// const newArr = arr.filter((value, index) => value.includes("b"));
// console.log(newArr);

// reduce ()
// const money = [100, 200, 300, 400, 500];
// const total = money.reduce((acc, curr) => {
//   return acc + curr;
// }, 20);
// console.log(total);

// every()

// let arr = ["red", "yellow", "blue", "green", "black", "white"];
// let newArr = arr.every((value) => {
//   console.log(value);
//   return arr.includes("blue"); //test condition
// });
// console.log(newArr);

// Includes (()) boolean tue or false
// let arr = ["red", "yellow", "blue", "green", "black", "white"];
// let newArr = arr.includes("blue");
// console.log(newArr);

// find()
// let arr = ["red", "yellow", "blue", "green", "black", "white"];
// let check = arr.find((value) => {
//   return value === "blue";
// });
// console.log(check);

// indexof

// let arr = ["red", "yellow", "blue", "green", "black", "white"];
// let placeHolder = arr.indexOf("black");
// console.log(placeHolder);

// let loveArr = new String(50).fill("I love JavaScript❤️");
// console.log(loveArr);

// Challange #1
// 1. create an array of 50 random numbers range between 1 and 100 programmatically
// const ranNum = [];
// for (i = 0; i < 50; i++) {
// const num = Math.floor(Math.random() * 100) + 1; //1--.99
// ranNum.push(num);
// ranNum[i] = num;
// }
// console.log(ranNum);
//2. sort the array in descending order

// ranNum.sort((a, b) => b - a);
// console.log(ranNum);

//3. get total of the array

// const total = ranNum.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log(total);

//4.Divide original array in to 2 new arrays that contains even or odd numbers only each.
// const evenNum = ranNum.filter((value) => value % 2 === 0);
// const oddNum = ranNum.filter((value) => value % 2 !== 0);
// console.log(evenNum, oddNum);
// 5. remove duplicate number for the original array
// const newNum = [...new Set(ranNum)];
// console.log(newNum);
// Challange #2 create unique array 50 numbers rang between 1 and 100 programmatically

// let uniqueNum = [];
// for (i = 0; uniqueNum.length < 50; i++) {
//   const num = Math.floor(Math.random() * 100) + 1;
//   if (!uniqueNum.includes(num)) {
//     uniqueNum.push(num);
//   }
//   console.log(i);
// }
// console.log(uniqueNum);

// Data type Object

const person = {
  name: "Binaya Moktan",
  number: 123456789,
  age: 25,
  occupation: "Software Engineer",
  address: "manthali",
  isMarried: false,
  skill: ["javascript", "react", "node", ["java", "python"]],
  gender: null,
  parents: {
    f: "minato",
    m: "kushina",
  },

  bio: () => {
    return "hello , Here me Nawang Tashi Lama";
  },
};
//shallow copy of object
// const data = person.skill[3][1];
// const data = person["gender"];
// const data = person.parents.m;
const data = person.bio();
console.log(person);
console.log(data);
