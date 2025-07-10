let obj = {
	toString(){
		return 10;
	},

	valueOf(){
		return 20;
	}
}

console.log(String(obj));




/*
JavaScript String(obj) with Custom toString()

1. What is this code?
   - Defines an object `obj` with:
     • `toString()` returning 10
     • `valueOf()` returning 20
   - Calls `String(obj)` to convert `obj` into a string
   - Logs the result

2. Output:
   "10"

3. Why:
   - `String(obj)` triggers ToPrimitive with a "string" hint
   - JavaScript calls `obj.toString()` first
   - `toString()` returns the number 10
   - JS then converts number 10 into the string "10"
   - `valueOf()` is ignored because `toString()` succeeded

4. Key Takeaways:
   - `String(x)` always prefers `toString()` over `valueOf()`
   - Custom `toString()` can control string conversion of objects
*/

