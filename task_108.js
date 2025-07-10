let obj = {
	toString(){
		return 10;
	}
}

console.log(+obj);



/*
JavaScript Unary Plus with Only toString()

1. What is this code?
   - Defines an object `obj` that implements only `toString()` → returns 10
   - Applies the unary plus (`+`) operator to `obj`
   - Logs the result

2. Output:
   10

3. Why:
   - Unary plus uses the “number” hint → tries `valueOf()` first
   - Since `valueOf()` isn’t defined on `obj`, JS calls `toString()`
   - `toString()` returns the number 10 (primitive)
   - The result is `+10` → 10

4. Key Takeaways:
   - In numeric context, JS first looks for `valueOf()`, then `toString()`
   - A `toString()` that returns a number can serve as a fallback for numeric coercion
*/

