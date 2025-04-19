class A {
	static num = 42;
	static foo() {
		console.log(this.num);
	}
}

A.foo();

/*

This code demonstrates the use of static properties and methods in JavaScript.

- Class `A` has a static property `num` set to 42.
- It also defines a static method `foo()` which logs `this.num`.
- When `A.foo()` is called, `this` refers to the class itself (`A`), so `this.num` evaluates to `A.num`, which is 42.

Console Output:
42

Key Point:
Static members belong to the class, not to instances. They are accessed directly via the class name.

*/

