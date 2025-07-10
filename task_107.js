let obj = {
	toString(){
		return 10;
	},

	valueOf(){
		return 20;
	}
}

console.log(obj + 4);



/*
JavaScript Object Addition with Custom valueOf()

1. What is this code?
   - Defines an object `obj` with:
     • `toString()` → returns 10
     • `valueOf()`  → returns 20
   - Performs `obj + 4` and logs the result

2. Output:
   24

3. Why:
   - The `+` operator triggers the ToPrimitive algorithm in number context
   - JavaScript calls `obj.valueOf()` first because one operand (`4`) is a number
   - `valueOf()` returns 20
   - The expression becomes `20 + 4` → 24

4. Key Takeaways:
   - In numeric operations, JS prefers `valueOf()` over `toString()`
   - Custom `valueOf()` lets you define how objects behave under `+`
*/

