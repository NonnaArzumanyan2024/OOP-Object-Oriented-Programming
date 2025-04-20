let obj = {
	x: 42,
	foo() {
		console.log(this.x);
	}
}


obj.foo.bind({x:100}).call({x:10});


/*

Description:
This code defines an object with a method `foo` that logs `this.x`. 
The method is first bound to `{ x: 100 }` using `.bind()`, and then invoked using `.call({ x: 10 })`.

Output:
100

Why:
The `.bind()` method creates a new function where `this` is permanently set to the provided object (`{ x: 100 }`).
Even though `.call({ x: 10 })` is used to invoke the bound function, it cannot override the bound `this` context.
Therefore, `this.x` evaluates to `100`.

*/

