class A {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class B extends A {
	constructor(z) {
		this.z = z;
	}
}

let obj = new B(10 , 20, 30);
console.log(a, z);


/*

Description:
This code demonstrates class inheritance in JavaScript but contains errors.
The first error is the missing 'super()' call in class B's constructor, which causes a ReferenceError.
In class B, we are trying to access 'this' before calling 'super()', which is required when extending a class.
The second issue is the incorrect number of arguments passed when creating an instance of class B (3 arguments instead of 1).
The constructor of class B expects a single parameter (z), but the code passes 3 values (10, 20, 30).

Errors:
1. 'super()' is not called in class B, causing a 'ReferenceError'.
2. Too many arguments are passed when creating an instance of class B, causing an issue in the constructor.

Output:
This will result in a ReferenceError and will not produce any output because the code fails before reaching 'console.log()'.
The exact error message will be something like:
"ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor"

Solution:
To fix these errors, we need to add 'super()' in class B's constructor and ensure the correct number of arguments are passed.

*/
