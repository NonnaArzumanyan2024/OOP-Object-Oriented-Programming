class A {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
}

class B extends A {};
let a = new B();
console.log(a.x);//undefined

/*
This code defines a class A with a constructor that takes two parameters, x and y. Class B extends A but does not define its own constructor, so it inherits A's constructor.

When creating an instance of B using new B(), no arguments are passed to the constructor. As a result, both x and y are set to undefined.

The console.log(a.x) line prints: undefined
*/
