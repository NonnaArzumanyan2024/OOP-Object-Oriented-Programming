let obj = {
	num: 42,
	foo() {
		console.log(this);
	}
}

const fn = obj.foo.bind(obj);
fn();


/*

Description:
This code defines an object `obj` with a property `num` and a method `foo` that logs `this`.
Then, it binds `obj.foo` to `obj` using `.bind(obj)`, creating a new function `fn`.
When `fn()` is called, `this` inside `foo` remains bound to `obj`.

Output (in Node.js):
{ num: 42, foo: [Function: foo] }

Why:
The `.bind(obj)` ensures that `this` inside `foo` always refers to `obj`, regardless of how the function is called.

*/

