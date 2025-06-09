const obj = {age:42};
let p = Object.create(obj, {
	age:{value:100}
});

delete p.age;
console.log(p.age);


/*

1. Demonstrates non-configurable properties in object inheritance

2. Output: 100

3. Why:
   - Object.create() makes 'age' non-configurable by default
   - delete fails silently on non-configurable properties
   - Property remains with its original value (100)

*/
