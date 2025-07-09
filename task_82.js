class A {
	foo(){
		console.log("A");
	}
}

class B {
	foo(){
		console.log("B");
	}
}

let obj = new B();
Object.setPrototypeOf(obj, A);
obj.foo0();


/*

1. Demonstrates improper prototype manipulation
2. Output: TypeError
3. Why:
   - setPrototypeOf() incorrectly sets class (A) as prototype
   - Method lookup fails as classes aren't valid prototypes
   - Correct approach: setPrototypeOf(obj, A.prototype)

*/
