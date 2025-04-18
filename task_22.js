class A {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
}

class B extends A{};
let a = new B(10, 20);
console.log(a.x); //10


/*
This code defines class A with a constructor that initializes properties x and y. Class B extends A and inherits its constructor since it doesn't define its own.

An instance of B is created with arguments 10 and 20, which are passed to the constructor of A. Therefore, this.x is set to 10, and this.y is set to 20.

The console.log(a.x) line prints:10 because x was initialized with the value 10.
*/
