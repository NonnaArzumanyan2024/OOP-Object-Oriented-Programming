class A {
	print() {
		console.log(this.num);
	}
}

class B extends A {
	num = 42
}

let a = new B();

a.print(); //42


/*
This code demonstrates JavaScript class inheritance and the use of class fields.

- Class `A` defines a method `print()` that logs the value of `this.num`.
- Class `B` extends `A` and defines a class field `num` with the value `42`.
- An instance of `B` is created and assigned to the variable `a`.
- When `a.print()` is called, it accesses the inherited method from class `A`, which logs the value of `this.num`.

Since the object `a` has the property `num = 42`, the method prints:

Console Output:
42

Key takeaway:
Even though the `print()` method is defined in the parent class `A`, it correctly accesses the `num` field defined in the child class `B`, because `this` refers to the actual instance (`a`) at runtime.
*/

