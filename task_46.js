class A {
	y = this.x;
	x = 42;
}

let obj = new A();

console.log(obj);


/*

Description:
This class defines two fields: `y` and `x`. The field `y` is initialized using `this.x`, but since class fields are initialized in order,
`this.x` is `undefined` at the time `y` is assigned.

Output (in Node.js):
A { y: undefined, x: 42 }

Why:
JavaScript class fields are initialized in the order they appear. So when `y = this.x` is evaluated, `x` has not been initialized yet,
resulting in `y` being `undefined`.

*/

