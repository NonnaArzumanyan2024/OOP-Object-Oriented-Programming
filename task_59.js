let obj = {
	num:42,
	foo() {
		"use strict"
		console.log(this);
	}
}

const fn = obj.foo;
fn();


/* 

  This code demonstrates how the value of `this` behaves in strict mode 
  when a method is extracted from an object and called independently.

  1. The object `obj` contains a method `foo()` which logs `this` to the console.
  2. Inside the method, `"use strict"` is declared, activating JavaScript's strict mode.
  3. The method `foo` is assigned to a new constant `fn`, effectively detaching it from the `obj` object.
  4. When `fn()` is called as a standalone function (not as a method of `obj`), the context is lost.
  5. In strict mode, `this` in a standalone function call is `undefined`.

  Output:
    undefined

  Explanation:
    In strict mode, when a function is called without an explicit object context, `this` is not bound to the global object, 
    but instead remains `undefined`. Since `fn()` is called independently, and not as `obj.foo()`, the function executes 
    with `this === undefined`, and logs that to the console.

*/
