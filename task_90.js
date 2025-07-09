const L1 = Object.getPrototypeOf(Array);

let arr = [1, 2, 3];

console.log(L1.isPrototypeOf(arr));



/*
JavaScript Prototype Chain Examination

1. What this code does:
   - Retrieves the prototype of the Array constructor (which is a function)
   - Creates a simple array [1, 2, 3]
   - Checks if that prototype (L1) is in the prototype chain of the array

2. Output:
   false

3. Why:
   - L1 = Object.getPrototypeOf(Array) → This returns Function.prototype
   - `arr` is an instance of Array, so its prototype chain is:
       arr -> Array.prototype -> Object.prototype -> null
   - Function.prototype (L1) is not part of arr's prototype chain
   - Therefore, L1.isPrototypeOf(arr) returns false

4. Key Takeaways:
   - Array is a constructor function -> its prototype is Function.prototype
   - Array instances (like arr) inherit from Array.prototype, not from Array itself
   - isPrototypeOf() checks the full prototype chain
   - Understanding prototype vs constructor is critical in JavaScript
*/

