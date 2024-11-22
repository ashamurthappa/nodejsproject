
var x = 10;
function foo() {
   console.log(x);
   var x = 20;
}
foo(); 
console.log("------------------------------------------------------------------")
//---------------------------------

async function asyncFunc() {
    console.log('A');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('B');
 }
 console.log('C');
 asyncFunc();
 console.log('D');
 console.log("------------------------------------------------------------------")
//---------------------------------

 const obj = {
    value: 42,
    getValue: function() {
        return this.value;
    }
 };
 console.log("------------------------------------------------------------------")
 //---------------------------------
 
 const anotherObj = {
    value: 99
 };
 
 console.log(obj.getValue());
 console.log(obj.getValue.call(anotherObj));  


 console.log("------------------------------------------------------------------")
 //---------------------------------

 console.log('Start');

Promise.resolve().then(() => console.log('Promise 1'));
setTimeout(() => console.log('Timeout 1'), 0);

Promise.resolve().then(() => console.log('Promise 2'));
setTimeout(() => console.log('Timeout 2'), 0);

console.log('End');
console.log("------------------------------------------------------------------")

/*
output is :
Start, End, Promise 1, Promise 2, Timeout 1, Timeout 2

The priority of microtask queue for execution is higher than the callback queue inside eventoop asysnc tasks.
Therefore, event loop will not pick any task from callback queue until the microtask queue is empty.
*/

console.log("------------------------------------------------------------------")
//---------------------------------

let a = {};
let b = { key: "b" };
let c = { key: "c" };

console.log("1.a[b] is ",a[b]);

a[b] = 123;

console.log("2.a[b] is ",a[b]);

a[c] = 456;

console.log("3.a[b] is ",a[b]);


//-------------------------------------

let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;

obj1.key = "new value";
obj2 = { key: "another value" };

console.log('obj1.key', obj1.key);
console.log('obj2.key', obj2.key);
console.log('obj3.key', obj3.key);

//https://www.codinn.dev/tricky-javascript/es6789-code-snippets-interview-questions