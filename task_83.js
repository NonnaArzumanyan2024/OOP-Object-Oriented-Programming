class A {
	foo(){
		console.log("A");
	}
	static foo(){
		console.log("C");
	}
}

class B {
	foo(){
		console.log("B");
	}
}

let obj = new B();
Object.setPrototypeOf(obj, A);
obj.foo();


/*
1. Demonstrates unexpected behavior when setting class (A) as prototype

2. Output (in Node.js): "C"

3. Why:
   - Object.setPrototypeOf(obj, A) sets prototype to the class constructor
   - Static method `foo` exists directly on A (i.e. A.foo)
   - Because `obj.__proto__ === A`, calling obj.foo() resolves to A.foo
   - This is NOT standard usage and should be avoided

Correct approach:
   Object.setPrototypeOf(obj, A.prototype);
   obj.foo(); // "A"

Conclusion:
   Static methods can leak into prototype chain if prototype is set to a class itself,
   but this breaks encapsulation and should never be used in real-world code.
*/

