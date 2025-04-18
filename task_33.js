class A {
	constructor() {
		if (new.target == A) {
			throw new Error ("abstract class");
		}
	}
}

class B extends A{};
let obj = new B();
console.log(obj);


/*
This code demonstrates how to simulate an abstract class in JavaScript using `new.target`.

- Class `A` checks if it is being directly instantiated using `new.target == A` in its constructor.
- If so, it throws an error to prevent direct instantiation (simulating an abstract class).
- Class `B` extends `A` but does not define its own constructor, so it automatically calls `A`'s constructor.
- When creating an instance of `B`, `new.target` is `B`, not `A`, so the error is not thrown.

Console Output:
B {}

Key Point:
Using `new.target` inside a class constructor is a common pattern to prevent instantiating base (abstract) classes directly.
*/

