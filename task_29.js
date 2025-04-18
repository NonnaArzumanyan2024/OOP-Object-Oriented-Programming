class A {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
}

class B extends A {
	constructor(a, b, c) {
		super(a, b)
		this.z = c
	}
}

let obj = new B(10, 20, 30);

console.log(obj);


/*
This code demonstrates class inheritance in JavaScript and how the `super` keyword is used to call the parent class constructor.

- Class `A` has a constructor that takes two parameters: `x` and `y`, and assigns them as properties.
- Class `B` extends `A` and adds a third property, `z`. Its constructor takes three parameters: `a`, `b`, and `c`.
- Inside `B`'s constructor, `super(a, b)` calls the parent constructor, assigning `x = a` and `y = b`.
- Then `z = c` is added as a property of `B`.

An instance of `B` is created with values `(10, 20, 30)`, so the object will have:

- `x: 10`
- `y: 20`
- `z: 30`

Console Output:
B { x: 10, y: 20, z: 30 }

Key takeaway:
When using inheritance in JavaScript, the `super` call must be made before accessing `this` in a subclass constructor.
*/

