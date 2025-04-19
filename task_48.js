let obj = {
	num: 42,
	foo() {
		console.log(this.num);
	}
}

const fn = obj.foo;
fn();


/*

Description:
This code defines an object with a method `foo` that logs `this.num`. However, the method is extracted and called without its object context.
In non-strict mode, `this` defaults to the global object (`global` in Node.js), where `num` is undefined.

Output (in Node.js):
undefined

Why:
When `foo` is called as a standalone function (not as a method), `this` is not bound to `obj`.
In non-strict mode, `this` becomes the global object, and since `global.num` is undefined, the output is `undefined`.

*/

