console.log([[33]] == "33");




/*
JavaScript Nested Array to String Coercion Example

1. What is this code?
   - Compares a nested array `[[33]]` with the string `"33"` using loose equality (`==`)

2. Output:
   true

3. Why:
   - `==` triggers type coercion between different types
   - JS calls `ToPrimitive` on `[[33]]` with a "default" hint
   - For arrays, that means `.toString()`, which flattens nested arrays:
     → `[33].toString()` → "33"
     → `[[33]].toString()` → "33"
   - Then `"33" == "33"` → true

4. Key Takeaways:
   - Nested arrays are flattened to comma‑separated strings when coerced
   - Loose equality can mask these coercions – prefer `===` for clarity
*/

