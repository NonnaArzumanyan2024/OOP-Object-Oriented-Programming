class A {
	x = 42;
	y = this.x;
}

let obj = new A();

console.log(obj);


/*

Description:
This code defines a class `A` with two instance fields: `x` and `y`.
Field `x` is set to `42`, and field `y` is initialized using the value of `this.x`.
Because class fields are initialized in the order they are written, `this.x` already holds `42` when `y` is assigned.

Output (in Node.js):
A { x: 42, y: 42 }

Why:
During object construction, `x` is set to 42 first. Then `y = this.x` evaluates to 42 as well.

*/

