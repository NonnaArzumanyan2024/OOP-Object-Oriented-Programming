class Foo {
	bar() {
		console.log(this);
	}
}

let a = new Foo();
const fn = a.bar;
fn();


/*

Description:
This code defines a class `Foo` with a method `bar()` that logs `this`.
The method is extracted and called as a standalone function (`fn()`), which causes `this` to lose its original context.

Output (in all modern environments, including Node.js and browsers):
undefined

Why:
Class methods are always executed in strict mode by default.
In strict mode, when a standalone function is invoked without an object context, `this` is undefined.
Since `a.bar` was detached and called as `fn()`, `this` becomes `undefined`.

*/

