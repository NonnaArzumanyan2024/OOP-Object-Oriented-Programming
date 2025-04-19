let obj = {
	x: 42,
	fn: () => {
		console.log(this.x);
	}
}

obj.fn.call({x:100});



/*

Description:
This code defines an object `obj` with a property `fn` that is an arrow function.
The function attempts to log `this.x`, and it's called using `call()` with a different context.

Output (in Node.js):
undefined

Why:
Arrow functions do not have their own `this`.
They inherit `this` from the surrounding lexical context.
Using `call()` does not change `this` in arrow functions.
As a result, `this.x` is undefined since `this` is not `{ x: 100 }` or `obj`.

*/

