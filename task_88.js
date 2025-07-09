function Person(){
	if (!new.target) {
		return new Person();
	}
	this.age = 33;
	return 100
}

const p = Person();
console.log(p);


/*
JavaScript Constructor Function Behavior Demo

1. What this code demonstrates:
   - A constructor function `Person` that self-corrects missing `new` calls via `new.target`
   - Attempts to return a primitive value (`100`) explicitly from constructor
   - Illustrates that primitive return values are ignored in constructor functions

2. Output:
   Person {age: 33}

3. Why:
   - When called without `new`, the function recursively calls itself with `new`
   - Inside the constructor, `this.age` is set to 33
   - The explicit return of a primitive (`100`) is ignored by JavaScript constructors
   - The newly created object (`this`) is returned instead

4. Key takeaways:
   - Using `new.target` to ensure constructors are called with `new`
   - Constructor functions ignore primitive return values
   - Only explicit return of objects override the default instance
*/

