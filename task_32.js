class A {
	static num = 42
}

let obj = new A();
console.log(obj.num); //undefined


/*

This code demonstrates the use of a static property in a JavaScript class.

- `num` is declared as a static property of class `A`. This means it's associated with the class itself, not with any instance of the class.
- When `obj` is created using `new A()`, it does not have access to the static property `num`.
- Attempting to access `obj.num` returns `undefined` because `num` exists only on the class `A`, not on its instances.

Console Output:
undefined

Key Point:
Static properties must be accessed directly on the class:
    A.num // → 42
Trying to access them through an instance (like `obj.num`) won't work.

*/

