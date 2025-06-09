class MyArray extends Array {};

let obj = new MyArray();
let p1 = Object.getPrototypeOf(obj);
let p2 = Array.prototype;

console.log(p1 == p2);




/*

  1. Examines prototype inheritance between custom and built-in classes

  2. Output:
     false

  3. Explanation:
     - MyArray.prototype is a distinct object that inherits from Array.prototype
     - So, Object.getPrototypeOf(obj) === MyArray.prototype
     - Array.prototype is the prototype of built-in arrays, not of MyArray instances directly
     - Though linked via the prototype chain, they are not the same object
     - This demonstrates that extending a built-in class does not reuse the same prototype

*/

