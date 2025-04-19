let obj = {
	num: 42,
	foo() {
		"use strict"
		console.log(this.num);
	}
}

const fn = obj.foo;
fn();


/*

Description:
This code defines an object with a method `foo` that logs `this.num` in strict mode.
However, the method is extracted from the object and called as a standalone function, causing `this` to be undefined.

Output (in Node.js):
TypeError: Cannot read properties of undefined (reading 'num')

Why:
In strict mode, when a method is called without an object context, `this` is `undefined`.
Since `this.num` attempts to access a property on `undefined`, a TypeError is thrown.

*/

