class A {
	x = 10
}

class B {
	x = 20
}

class C extends (B, A){};

let obj = new C();

console.log(obj.x); //10

/*
This code demonstrates how JavaScript handles class inheritance using the comma operator.

- Class `A` defines a property `x = 10`
- Class `B` defines a property `x = 20`
- Class `C` is declared as `extends (B, A)`, which looks like multiple inheritance, but JavaScript does **not** support multiple inheritance.

Instead, `(B, A)` is interpreted using the **comma operator**, which evaluates both `B` and `A` and returns the last one (`A`).  
So, the line `class C extends (B, A)` is effectively the same as `class C extends A`.

Therefore, when we create a new instance of `C`, it inherits from `A`, and the value of `x` is `10`.

Console Output:
10

Key takeaway:
JavaScript does not support multiple inheritance with the `extends` keyword. The comma operator simply returns the last expression.
*/

