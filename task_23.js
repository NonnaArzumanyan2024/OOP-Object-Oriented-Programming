class A {
	constructor() {
		console.log("A")
	}
}

class B extends A {
	constructor() {
		super()
		console.log("B");
	}
}

class C extends B {
	constructor() {
		console.log("C")
		super()
	}
}

let a = new C(); //C A B

/*
This code defines a class hierarchy where:
C extends B, and B extends A.
Each constructor logs a message.
In C's constructor, console.log("C") appears before the call to super().

Although placing console.log("C") before super() might seem invalid in JavaScript, it's allowed as long as this is not accessed before calling super(). In this case, no this is used before super(), so it runs without error in environments like Node.js.

Why?
new C() triggers C's constructor → logs "C".
Then super() calls B's constructor → which calls A's constructor → logs "A".
After returning from A, B logs "B".
*/
