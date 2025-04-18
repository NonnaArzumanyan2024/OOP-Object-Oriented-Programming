class A {
	foo() {
		console.log("A");
	}
}

class B extends A {
	foo() {
		console.log("B");
	}
}

class C extends A {};

let a = new A();
let b = new B();
let c = new C();

console.log(a.foo() + b.foo() + c.foo());


/*

This code demonstrates method overriding in JavaScript class inheritance and highlights the behavior of functions that do not return a value.

- Class `A` defines a method `foo()` that logs `"A"`.
- Class `B` extends `A` and overrides the `foo()` method to log `"B"`.
- Class `C` extends `A` without overriding the method, so it inherits `A`'s version of `foo()`.

Three objects are created: `a` (instance of A), `b` (instance of B), and `c` (instance of C).
The expression `console.log(a.foo() + b.foo() + c.foo());` is evaluated as follows:

1. `a.foo()` logs "A" and returns `undefined`
2. `b.foo()` logs "B" and returns `undefined`
3. `c.foo()` logs "A" and returns `undefined`

Then, `undefined + undefined + undefined` results in `NaN` (Not a Number).

Console Output:
A  
B  
A  
NaN

Key Takeaway:
If a function only logs output and doesn't return anything, it implicitly returns `undefined`. Adding `undefined` values results in `NaN`.

*/

