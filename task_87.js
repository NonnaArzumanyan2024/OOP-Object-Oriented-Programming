function Person(){
	if (!new.target) {
		return new Person();
	}
	this.age = 42;
	return {a:10};
}

const p1 = Person();
console.log(p1);


/*
JavaScript Constructor Function Behavior Demo

1. What this code does:
   - Defines a constructor function `Person`
   - Uses `new.target` to check if function was called with `new`
   - If not called with `new`, calls itself correctly with `new`
   - Assigns `this.age = 42`
   - Explicitly returns a new object `{a:10}`, overriding the default instance

2. Output:
   - Logs: {a: 10}

3. Why:
   - When calling `Person()` without `new`, `new.target` is `undefined`
   - The function calls `new Person()` recursively, ensuring an instance is created
   - Normally, the new instance would have an `age` property equal to 42
   - However, the constructor explicitly returns the object `{a:10}`
   - In JavaScript constructors, when an explicit object is returned, it replaces the default `this`
   - Thus, `p1` is assigned the returned object `{a:10}`, not the usual instance

4. Concepts demonstrated:
   - The `new.target` meta-property to detect constructor call context
   - Constructor functions auto-correcting calls without `new`
   - How explicit return values in constructors override the created instance
*/

