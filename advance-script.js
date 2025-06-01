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
