class A {
	constructor() {
		if (this.constructor == A) {
			throw new Error ("abstract class");
		}
	}
}

class B extends A{}

let obj = new B();
console.log(obj); //B{}


/*
This code demonstrates how to simulate an abstract class in JavaScript using a constructor check.

- Class `A` is designed to act like an abstract class. Its constructor throws an error if someone tries to instantiate it directly (i.e., `new A()`).
- Class `B` extends `A` but does not override the constructor.
- When `new B()` is called, the constructor of `A` is invoked, but `this.constructor` equals `B`, not `A`, so no error is thrown.
- The object is successfully created.

Console Output:
B {}

Key point:
By checking `this.constructor == A`, we can prevent direct instantiation of class `A`, while still allowing derived classes like `B` to use its constructor safely.
*/

