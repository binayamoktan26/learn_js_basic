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
function bahira() {
  let x = 10; // lexical scope मा छ

  function bhitra() {
    console.log(x); // bahira() को variable x लाई access गर्न सक्छ
  }

  bhitra();
}

bahira(); // Output: 10   to understand lexical scope

function bahira() {
  let count = 0;

  function bhitra() {
    count++; // बाहिरी function को variable लाई update गर्छ
    console.log(count);
  }
  return bhitra;
}
const counter = bahira();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
//  closure scope ko example
