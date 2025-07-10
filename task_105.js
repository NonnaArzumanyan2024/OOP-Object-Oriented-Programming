let obj = {
	toString(){
		return 10;
	},

	valueOf(){
		return 20;
	}
}

console.log(+obj);



/*
JavaScript Unary Plus and Custom valueOf()

1. What is this code?
   - Defines an object `obj` with:
     • `toString()` returning 10
     • `valueOf()` returning 20
   - Applies the unary plus operator (`+`) to `obj`
   - Logs the result

2. Output:
   20

3. Why:
   - Unary plus uses the “number” hint → calls `valueOf()` first
   - `obj.valueOf()` returns 20, so `+obj` yields the number 20
   - Since the primitive is already a number, no further conversion is needed

4. Key Takeaways:
   - Unary plus triggers numeric coercion using `valueOf()`
   - If `valueOf()` returns a primitive number, it is used directly
*/

