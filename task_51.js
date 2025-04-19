let obj = {
	x: 42,
	fn: function() {
		console.log(this.x);
	}
}

obj.fn.call({x:100});


/*

Description:
This code defines an object `obj` with a method `fn` that logs `this.x`.
The method is called using `call()` with a custom context `{ x: 100 }`.

Output (in Node.js):
100

Why:
The `call()` method allows setting the value of `this` explicitly.
By passing `{ x: 100 }` to `call()`, the function's `this` is overridden, and it logs `100` instead of `obj.x`.

*/

