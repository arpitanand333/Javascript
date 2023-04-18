// Types of function
// Function statement
function sayHello(param){
    console.log("hello", param);
    return "Done"
}
sayHello();
sayHello(123);
sayHello([1,2,3,4]);
//function expression

let fncontainer = function(){
    console.log("I am an anonymous function");
}
fncontainer();
// IIFE => Immediately invoked function expression
(function fn(){
    console.log("I am IFEE, i will run alone");
})();
// Arrow function
let fn = (num) =>{
    return num*num;
}
console.log(fn(5));

// *********First class citizen
// function are treated as a variable
// 1. assignment -> fn expression
// variable can be passed as a parameter
// 2. function can be passed as a parameter

function test(param){
    console.log("hello", param);
    param();
    return "jhh";
}
//address
function smaller(){
    console.log("hello i am smaller");
}
    
    
let rval = test(smaller);
console.log(rval);

function outer(){
    console.log(" i am outer function");
    return function(){
        console.log("inner function");
    }
}
let rVal = outer();
console.log(rVal());

