class A {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
}

class B extends A {
	getOne() {
	return super.x
	}
}

let obj = new B(10, 20);
console.log(obj.getOne());


/*

  Description:
  This code demonstrates JavaScript class inheritance and the use of `super` within a subclass.
  Class B extends class A and defines a method `getOne()` that attempts to access `super.x`.

  However, `x` is defined as an instance property inside A's constructor, not on A.prototype.
  The `super` keyword in this context refers to the prototype of class A, 
  and it cannot access instance properties directly.

  As a result, `super.x` is undefined, because there is no `x` property on A.prototype.

  Output:
  undefined

  Explanation:
  - `super.x` looks for a property `x` on A.prototype, but it doesn’t exist there.
  - The instance actually holds `x` on `this.x`, so to access it correctly, `this.x` should be used instead.
*/

