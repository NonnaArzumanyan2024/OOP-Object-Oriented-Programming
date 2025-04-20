function foo() {
	const inner = () => console.log(this.x);
	inner();
}

foo.call({x:100});


/*

Description:
This code defines a function `foo` that contains an arrow function `inner`. 
The `inner` function logs `this.x`, and since arrow functions do not have their own `this`, they inherit it from their enclosing context.

When `foo.call({x: 100})` is invoked, the `this` in `foo` is set to `{x: 100}`. 
Since `inner` is an arrow function, it uses the `this` value from the enclosing `foo` function, which is `{x: 100}`.

Output:
100

Why:
Arrow functions inherit `this` from their surrounding context, meaning that `inner()` uses the `this` value from the `foo` function call, which was set to `{x: 100}`. Therefore, `this.x` is `100`.

*/

