class MyArray extends Array {}

let obj = new MyArray();
let p1 = Object.getPrototypeOf(obj);
let p2 = MyArray.prototype;

console.log(p1 == p2);


/*
JavaScript Class Inheritance and Prototype Comparison

1. What this code does:
   - Defines MyArray class extending built-in Array
   - Creates instance (obj) of MyArray
   - Gets two prototype references:
     p1: Instance's prototype (via getPrototypeOf)
     p2: Class's prototype property
   - Compares these references

2. Output:
   true

3. Why:
   - Both p1 and p2 reference MyArray.prototype
   - getPrototypeOf(obj) returns the constructor's prototype
   - MyArray.prototype is the prototype object instances inherit from
   - Demonstrates prototype chain in class inheritance
   - Shows how extending built-ins works with prototypes
*/


