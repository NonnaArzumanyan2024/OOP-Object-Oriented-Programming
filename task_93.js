console.log([4] == true);



/*
JavaScript Loose Equality with Type Coercion Example

1. What is this code?
   - Compares an array `[4]` with the boolean `true` using `==`
   - Logs the result

2. Output:
   false

3. Why:
   - `==` triggers type coercion between operands of different types
   - Step-by-step coercion:
     - `true` becomes number `1`
     - `[4]` is an object → ToPrimitive called with "default" hint
       → `[4].toString()` → "4" → converted to number → 4
     - Final comparison: `4 == 1` → false

4. Key Takeaways:
   - `==` performs automatic type conversion
   - Boolean `true` becomes number `1`
   - Arrays are objects and convert to strings before becoming numbers
   - Prefer `===` for predictable behavior
*/

