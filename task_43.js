class A {
	#bar() {
		console.log("Hello");
	}
}

class B extends A {}

let obj = new B();
obj.#bar();


/*

Description:
This JavaScript code defines two classes, `A` and `B`. 
Class `A` contains a private method `#bar()`, which is only accessible within the class itself.
Class `B` extends `A`, but it cannot access `#bar()` because private fields cannot be inherited or accessed outside of their class.

However, there's a typo in the private method `#bar()` (line 3), where `consol.log` should be `console.log`.

Output:
When the code runs, it throws the following error due to the private method being called from an instance of `B`:
SyntaxError: Private field '#bar' must be declared in an enclosing class

Fix:
To fix the issue, the private method should either be made public or accessed within class `A` itself. Also, the typo should be corrected in the `#bar()` method.

*/

