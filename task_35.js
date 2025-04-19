class A {
	static num = 42;
	static foo() {
		console.log(A.num);
	}
}

A.foo();


/*

This code demonstrates the use of static properties and static methods in JavaScript.

- The class `A` defines a static property `num` with a value of 42.
- It also defines a static method `foo()` that logs `A.num` to the console.
- Since `num` is a static property, it belongs to the class itself, not to instances of the class.
- Calling `A.foo()` executes the method, which accesses `A.num` and prints its value.

Console Output:
42

Note:
Static members are accessed directly on the class, not through instances.

*/

