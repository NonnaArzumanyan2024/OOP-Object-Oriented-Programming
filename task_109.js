console.log([1,2,3] + "OK");



/*
JavaScript Array and String Concatenation Example

1. What is this code?
   - Adds an array `[1,2,3]` to the string `"OK"` using the `+` operator
   - Logs the result

2. Output:
   "1,2,3OK"

3. Why:
   - When one operand is a string, `+` performs string concatenation
   - Arrays convert to strings via `toString()`
     → `[1,2,3].toString()` → "1,2,3"
   - Then "1,2,3" + "OK" → "1,2,3OK"

4. Key Takeaways:
   - `+` between string and non-primitive always concatenates
   - Arrays become comma-separated strings when coerced
*/

