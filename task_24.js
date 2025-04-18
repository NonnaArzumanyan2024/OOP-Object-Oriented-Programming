class A {
	constructor() {
		throw new Error("abstract class");
	}
}

class B extends A{};
let a = new B();
console.log(a); //Error: abstract class


/*
This code demonstrates how to simulate an abstract class in JavaScript.
Class A throws an error in its constructor to prevent direct instantiation.
Class B extends A and does not define its own constructor, so it inherits A's constructor.
When new B() is called, it triggers A's constructor, which immediately throws an error.

Since class B does not override the constructor, it automatically uses the parent (A) constructor. That constructor throws an error, simulating the behavior of an abstract class. As a result, the object a is never created, and console.log(a) is never reached.
*/
