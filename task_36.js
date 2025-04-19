class A {
	bar = 42;
	constructor() {
		this.bar = 55;
	}
}

class B {
	bar = 66;
}

let obj = new B();
console.log(obj.bar);


/*

This code demonstrates the use of class fields in JavaScript.

- Class `A` defines a property `bar` initialized to 42, and then reassigns it to 55 inside the constructor.
- Class `B` defines a class field `bar` with a value of 66 and does not have a constructor.
- An object `obj` is created from class `B`.
- The value of `obj.bar` is printed to the console.

Since `obj` is an instance of class `B`, and `B` assigns `bar = 66` directly as a class field,
the console will output:

Output:
66

Note:
Class `A` is not used in this code and has no effect on the output.

*/

