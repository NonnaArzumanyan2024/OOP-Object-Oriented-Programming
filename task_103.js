let obj = {
	toString(){
		return 10;
	},

	valueOf(){
		return 20;
	}
}

console.log(obj === 20);



/*
JavaScript Strict Equality with Objects

1. What is this code?
   - Defines an object `obj` with custom `toString()` (→10) and `valueOf()` (→20)
   - Compares `obj` to the number `20` using strict equality (`===`)
   - Logs the result

2. Output:
   false

3. Why:
   - `===` checks both type and value without coercion
   - `obj` is an object; `20` is a number (primitive)
   - Even though `obj.valueOf()` returns 20, the object itself is not a number
   - Therefore, `obj === 20` is false

4. Key Takeaways:
   - Use `===` to avoid unexpected coercion
   - Objects are never strictly equal to primitives
*/

