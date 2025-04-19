class A {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class B extends A {
	getOne() {
		super(this.x);
		console.log(this.x);
	}
}

let obj = new B(10, 20);
obj.getOne();


/*

Description:
This code defines two classes: `A` and `B`.
`A` has a constructor that sets two properties: `x` and `y`.
`B` extends `A` and adds a method called `getOne()`.

However, in `getOne()`, the line `super(this.x);` is invalid.
In JavaScript, `super(...)` can only be called inside a constructor,
not inside regular methods. This causes a SyntaxError at runtime.

Output:
When calling `obj.getOne()`, the code throws the following error:
SyntaxError: 'super' keyword unexpected here

Fix:
To fix the issue, remove the line `super(this.x);`.
Then the method will correctly print `this.x`, and the output will be:
10

*/
