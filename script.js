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

// const person = {
//   name: "Binaya Moktan",
//   number: 123456789,
//   age: 25,
//   occupation: "Software Engineer",
//   address: "manthali",
//   isMarried: false,
//   skill: ["javascript", "react", "node", ["java", "python"]],
//   gender: null,
//   parents: {
//     f: "minato",
//     m: "kushina",
//   },

//   bio: () => {
//     return "hello , Here me Nawang Tashi Lama";
//   },
// };
// shallow copy of object
// Read data
// const data = person.skill[3][1];
// const data = person["gender"];
// const data = person.parents.m;
// const data = person.bio();
// person.name = "Jiraya ";
// person.company = "dell";
// persons.parents.b = "itachi";

// Update Data
// person.skill.push("C++");
// person.skill[3].push("C#");

// console.log(data);

// deleting the properties of object

// person.address = undefined;
// delete person.age;
// person.skill[3].pop();

// console.log(person);

// Destructuring : const {name}:obj

// const {
//   name,
//   age,
//   occupation,
//   bio,
//   parents: { f },
// } = person;
// console.log(name, age, bio(), f);
// default

// person.room = "undefined";
// const { name, age, occupation, room = " N / A" } = person; // N/A = Not avaible
// console.log(name, age, room);

// ES6 Rest Operator

// const { name, age, occupation, ...restOfTheProperties } = person;
// console.log(restOfTheProperties);

// spread

// const career = {
//   title: "web develoer",
//   salary: "45000",
// };
// const combo = { ...person, ...career };
// console.log(combo);

// copying data :  shallow copy and deep copy

// const p1 = person;

// const p1 = Object.assign({}, person);
// p1.name = "nawang tashi lama";
// shallow copy
// console.log(p1);
// console.log(person);

// const p1 = JSON.stringify(person);
// console.log(p1);

//loop through object
// for (let key in person) {
//   console.log(key);
//   console.log(key, person[key]);

//
// const personArg = Object.entries(person);
//convert all the key value pair into array
// const personArg = Object.keys(person);
// all the key of the object convert into array
// const personArg = Object.values(person);
// all the value of the object convert into array
// console.log(personArg);

//Date()Object
/*formate
get method
set method
*/

// const today = new Date();
// const today = Date.now();
// let data = today.getDay();
// console.log(data);
// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());

// let myDate = new Date("2025-02-11");

// let myDate = new Date("02-12-2025");
// console.log(myDate.toDateString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myDate.getTime());
// console.log(Math.round(Date.now() / 1000));

// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// newDate.toLocaleString(`default`, { weekday: "short" });

// date challenge #1 : create a function that takes food s and the expire data and returns one of the following
//1. if expired: AB is expired 4 days ago
//2. if not expireed : you have 10 days to use this product .

//  const checkExp= ()=>{
//return `AB is expired 4 days ago`;
//return `you have 10 days to use this product`;
//  }

//  cosnt foods =[
//   {
//     name : "tuna",
//     exp: "2023-10-20",

//   },

//   {
//     name : "Milk",
//     exp: "2023-10-25",

//   }

//  ];
//  food.map((food)=> {
//   console.log(food,i);)

//Function introduction
// function sayHi() {
// const str = "hello world";
// console.log(str);
//   const str = `hello world   ${"nawang tashi lama"}`;
//   console.log(str);
// }

// sayHi();
//Es6 function
// const fun = () => {
//   const str = "hello world ";
//   console.log(str);
// };
// fun();

//function in use

// const binayaBio = "binaya from manthali , 25 years old";
// const nawangBio = "nawang from Kathmandu , 22 years old and likes to hacking";
// const tashiBio = "tashi from Pokhara , 28 years old and likes to coding";
// console.log(binayaBio, nawangBio, tashiBio);

// const userList = [
//   {
//     name: "binaya Moktan",
//     address: "manthali",
//     age: 25,
//     hobbies: ["coding", "hacking"],
//   },
//   {
//     name: "nawang Lama",
//     address: "Kathmandu",
//     age: 22,
//     hobbies: ["coding", "networking"],
//   },
//   {
//     name: "tashi lama",
//     address: "Pokhara",
//     age: 28,
//     hobbies: "coding",
//   },
// ];
// console.log(userList);
// const personalBio = ({ name, address }) => {
// const { name, address } = person;
// console.log(person);
// const str = `${name} from ${address} ,24 years old and likes to coding`;
// return str;
// };

// const data = personBio();
// console.log(userList);

// userList.forEach((item) => {
//   console.log(personalBio(item));
// });

// const num1 = [1, 2, 3, 4, 5];
// const num2 = [9, 10];
// const combined = [...num1, ...num2];

// console.log(combined);
// const num1 = [1, 2, 3, 4, 5];
// const num2 = [9, 10];

//JS error handling
// try {
//   console.log(x);
//your code here
// } catch (error) {
// console.log(error);
// console.log("this is error handling block");
//send notification to user or engineer team
// } finally {
//   console.log("this block will always run");
// }

// console.log("this work");

// try {
//   throw new Error("hacked");
// } catch (error) {
//   console.log(error.message);

//send notification to hacker team ..
//   if (error.message === "hacked") {
//     console.log("hire hacker team");
//   }
// } finally {
//   console.log("this block will always run");
// }

// in this case , throw used to error handling

// JS - scheduling
/*1. setTimeout

a.clearTimeout
2. setInterval
a.clearInterval*/

// 1. setTimeout
// clearTimeout
// console.log("i am before setTimeOut");
// const counter = setTimeout(() => {
//   console.log("i am from inside setTimeOut");
// }, 5000); //1000ms means 1 sec

// clearTimeout(counter);

// setInterval
// clear interval
// let counter = 0;
// const countDown = setInterval(() => {
//   console.log("sharengan", counter++);
//   if (counter === 10) {
//     clearInterval(countDown);
//     console.log("you are already in my genjutsu");
//   }
// }, 10);

//Advanced -Jaascript Concept

// const yoyo = () => console.log("0.1" + (5 + 3));
// console.log("1. log");
// setTimeout(() => console.log("2.inside first timeout  log"), 5000);
// console.log("3. after first setTimeout");
// function sayHi() {
//   console.log("4. inside sayHi function");
//   yoyo();

// setTimeout(() => {
//   console.log("5. inside second timeout log");
// }, 0);
// sayHi();
// console.log("6. last log");
