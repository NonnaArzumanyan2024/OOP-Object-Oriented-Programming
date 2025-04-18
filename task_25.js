class A {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class B extends A {
	constructor(a, b, c) {
		this.z = c;
		super();
	}
}

let obj = new B(10, 20, 30);

/*
This code demonstrates an important rule in JavaScript class inheritance.
- Class `A` has a constructor that takes two arguments: `x` and `y`.
- Class `B` extends `A` and defines its own constructor with three parameters: `a`, `b`, and `c`.
- Inside the constructor of `B`, it tries to assign `this.z = c` before calling `super()`, which is **not allowed** in JavaScript.
In a subclass, `super()` must be called **before any use of `this`**, because the parent class must initialize its part of the object first.

Output:
ReferenceError: Must call super constructor in derived class before accessing 'this'

Key Takeaway:
In JavaScript, when extending a class, you must call `super(...)` before accessing `this` in the constructor.
*/

