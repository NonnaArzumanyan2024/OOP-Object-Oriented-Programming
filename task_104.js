let obj = {
	toString() {
		return "100";
   	},
   
	valueOf() {
      		return 100;
   	}
};

console.log(obj === 100); // false
 



/*
JavaScript Strict Equality Example with Custom Coercion Methods

1. What is this code?
   - Defines an object `obj` with:
     • `toString()` returning the string "100"
     • `valueOf()` returning the number 100
   - Compares `obj` to the primitive number `100` using strict equality (`===`)
   - Logs the result

2. Output:
   false

3. Why:
   - The strict equality operator (`===`) checks both type and value and does **not** perform coercion.
   - `obj` is an object; `100` is a number primitive.
   - Even though `obj.valueOf()` yields `100`, `obj` itself remains an object.
   - Because an object is never strictly equal to a primitive, `obj === 100` is `false`.

4. Key Takeaways:
   - Use `===` to avoid unexpected type coercion.
   - Objects, even with custom `valueOf()`, cannot be strictly equal to primitives.
*/

