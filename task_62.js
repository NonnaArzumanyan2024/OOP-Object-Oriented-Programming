const obj = {age:42};
let p = Object.create(obj, {
	age:{value:100, configurable:true}
});
delete p.age;
console.log(p.age);


/*  

This code demonstrates prototype inheritance in JavaScript:
1. Creates an object `obj` with `age: 42`.
2. Creates a new object `p` with `obj` as its prototype and an OWN property `age: 100`.
   - The property is marked as configurable:true, allowing it to be:
     • Deleted (via delete operator)
     • Reconfigured (via Object.defineProperty)
     • Have its attributes changed
3. Deletes `p`'s own `age` property, forcing the lookup to fall back to the prototype (`obj`).
Result: `42` is logged (inherited from `obj`).
   - Note: If configurable were false, the delete would fail and output would be 100.

*/

