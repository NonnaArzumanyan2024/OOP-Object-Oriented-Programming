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
The method is extracted and called independently, causing `this` to lose its original context.

Output (in Node.js):
Object [global] { ... }

Why:
In non-strict mode, when a standalone function is invoked without an object context, `this` defaults to the global object in Node.js.
Since `a.bar` was detached and called as `fn()`, `this` becomes `global`.

*/

