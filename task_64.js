const obj = {age:42};
let p = Object.create(obj, {
	age:{value:100}
});
p.age = 150;
console.log(p.age);



/*

Demonstrates property descriptor behavior:
1. Creates object `p` with:
   - Prototype `obj` (age:42)
   - Own non-writable property `age:100`
2. Attempts to modify `p.age` fails silently
   (default descriptor has writable:false)
3. Logs original value 100 because:
   - Assignment was ignored
   - Own property shadows prototype

*/
