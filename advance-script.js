// var globalVar = "global";
// function outerFunctionScope() {
//   var outerFunVar = "outer";
//   function innerFuncScop() {
//     var innerFunVar = "inner";
// console.log(innerFunScop);
// console.log(outerFunVar);
// console.log(globalVar);
// }
// innerFuncScop();
// }
// outerFunctionScope();
// This will throw an error because innerFuncScop is not defined in this scope
// console.log(innerFunScop);
// console.log(outerFunVar);
// console.log(globalVar);

// function f() {
//   var a = "a";

//   if (true) {
//     var a = "abc";
//     console.log(a); // abc
//   }
//   console.log(a);
// }
// f();

// function f() {
//   let counter = 0;
//   return function () {
//     return counter++;
//   };
// }
// const var1 = f();
// console.log(var1()); // 0
// console.log(var1()); // 1
// console.log(var1());
// console.log(var1()); // 2
// console.log(var1()); // 2

//lexical scope example
// function bahira() {
//   let x = 10; // lexical scope मा छ

//   function bhitra() {
//     console.log(x); // bahira() को variable x लाई access गर्न सक्छ
//   }

//   bhitra();
// }

// bahira(); // Output: 10   to understand lexical scope

// function bahira() {
//   let count = 0;

//   function bhitra() {
//     count++; // बाहिरी function को variable लाई update गर्छ
//     console.log(count);
//   }
//   return bhitra;
// }
// const counter = bahira();
// counter(); // Output: 1
// counter(); // Output: 2
// counter(); // Output: 3
//  closure scope ko example

// OOP

// const person = {
//   name: "binaya",
//   add: "manthali",
//   bio() {
// console.log(this);
//     return `my name is ${this.name}, and i live in ${this.add}`;
//   },
// };
// console.log(person.bio());

//factory function

// const person = {
//   name: "binaya",
//   add: "manthali",
//   bio() {
// console.log(this);
//     return `my name is ${this.name}, and i live in ${this.add}`;
//   },
// };
// console.log(person.bio());

//factory function

// function aboutPerson(name, add) {
//   return {
//     name: name,
//     add: add,
//     bio() {
//       return `my name is ${this.name}, and i live in ${this.add}`;
//     },
//   };
// }

// const person1 = aboutPerson("binaya", "manthali");
// const person2 = aboutPerson("shikamaru", "kathmandu");

// console.log(person1.bio());
// console.log(person2.bio());

// constructor function

// function addPerson(name, add) {
//   this.name = name;
//   this.add = add;
// }
// const person1 = new addPerson("binaya", "manthali");
// console.log(person1); // Output: binaya

//CLASS OOP

// class Person {
//   constructor(name, add) {
//     this.name = name;
//     this.add = add;
//   }

//   bio() {
//     return `my name is ${this.name}, and i live in ${this.add}`;
//   }
//   nameUppercase() {
//     this.name = this.name.toUpperCase();
//     this.add = this.add.toUpperCase();
//   }
// }
// const person1 = new Person("binya", "manthali");
// console.log(person1.bio()); // Output: my name is binya, and i live in manthali
// person1.nameUppercase();
// console.log(person1.bio()); // Output: BINYA

//procedural PP

const jonin = {
  name: "Kakashi",
  add: "headen leaf village",

  age: "1-1-2001",
};
// function hokage(jutsu) {
//   return `my nameis ${jutsu.name} and i live in ${
//     jutsu.add
//   } and my age is ${getAge(jutsu.age)}`;
// }

// function getAge(age) {
//   return new Date().getFullYear() - new Date(age).getFullYear();
// }

// function birthday(jutsu) {
//   return `happy birthday  ${jutsu.name}, you are now ${
//     getAge(jutsu.age) + 1
//   } years old!`;
// }
// console.log(birthday(jonin));
// console.log(hokage(jonin));
// console.log(jonin); // Output: my nameis Kakashi and i live in headen leaf village and my age is 3

//4 pillars of OOP

//ENCAPSULATION
class person {
  constructor(obj) {
    this.name = obj.name;
    this.add = obj.add;
    this.age = obj.age;
  }
  hokage() {
    return `my name is ${this.name} and i live in ${
      this.add
    } and my age is ${this.getAge(this.age)}`;
  }

  getAge() {
    return new Date().getFullYear() - new Date(this.age).getFullYear();
  }

  birthday() {
    return `happy birthday  ${this.name}, you are now ${
      this.getAge() + 1
    } years old!`;
  }
}
const kakashiInfo = new person(jonin);
console.log(kakashiInfo.hokage()); // Output: my nameis Kakashi and i live in headen leaf village and my age is 3
