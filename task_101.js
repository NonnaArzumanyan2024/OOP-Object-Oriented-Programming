let obj = {
	toString(){
		return 10;
	},
	valueOf(){
		return 20;
	}
}

console.log(String(+obj));



/*
JavaScript Object Coercion with Unary Plus and String()

1. What is this code?
   - Defines an object `obj` with:
     • toString() → returns 10
     • valueOf()  → returns 20
   - Applies unary plus: `+obj`
   - Wraps the result with `String()`
   - Logs to console

2. Output:
   "20"

3. Why:
   - Unary plus uses the “number” hint → calls `valueOf()` first
     → `valueOf()` returns 20
   - `+obj` yields the number 20
   - `String(20)` converts it to the string "20"

4. Key Takeaways:
   - Unary plus (`+`) triggers numeric coercion (valueOf → toString fallback)
   - `String(...)` always converts its argument to a string
*/


