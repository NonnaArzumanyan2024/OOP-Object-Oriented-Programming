let obj = {
	bar: 42,
	child: {
		bar: 100,
		foo: function() {
			console.log(this.bar);
		}
	
	}
}

obj.child.foo();


/*

Description:
This code defines a nested object `obj`, with a `child` object that has its own `bar` property and a method `foo()`.
When `obj.child.foo()` is called, the method logs `this.bar`.

Output (in Node.js):
100

Why:
The `foo` method is called on `obj.child`, so `this` refers to `obj.child`.
As a result, `this.bar` accesses `obj.child.bar`, which is `100`.

*/

