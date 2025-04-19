let obj = {
	num: 42,
	foo() {
		"use strict"
		console.log(this);
	}
}

const fn = obj.foo;
fn();


/*

Description:
This code defines an object with a method `foo`, which logs `this` in strict mode.
The method is extracted from the object and called without context, resulting in `this` being undefined.

Output (in Node.js):
undefined

Why:
In strict mode, when a function is called without an explicit object context, `this` is undefined.
Since `foo` is invoked independently (not as obj.foo()), it does not have a bound `this`, and therefore logs `undefined`.

*/

