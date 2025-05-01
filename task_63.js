const obj = {age:42};
const p1 = Object.create(obj);
const p2 = Object.getPrototypeOf(p1);
console.log(p2);


/*

Demonstrates JavaScript prototype chain:
1. Creates object `obj` with property `age:42`
2. Creates `p1` with `obj` as its prototype
3. Gets `p1`'s prototype (which is `obj`)
4. Logs the prototype object - outputs { age: 42 } 
   because p2 references the original obj

*/
