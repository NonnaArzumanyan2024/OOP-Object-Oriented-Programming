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
Object.setPrototypeOf(obj, A.prototype);
obj.foo();


/*
JavaScript Prototype Modification Example 

1. What this code does:
    - Defines two classes (A and B), each with its own foo() method
    - Creates an instance of B
    - Dynamically changes the instance's prototype to A.prototype
    - Calls the foo() method on the modified object

2. Output:
    This code will print: "A"

3. Why this happens:
    - The obj.foo() call follows JavaScript's prototype lookup chain
    - After setPrototypeOf, obj's prototype becomes A.prototype
    - Even though obj was created from B, the prototype replacement means:
        1. JavaScript first checks obj's own properties (no foo() directly on obj)
        2. Then checks the prototype (now A.prototype) and finds A's foo()
    - The original B.prototype is no longer in the prototype chain
    - Demonstrates how runtime prototype changes affect method resolution
*/
