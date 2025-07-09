console.log([4] == 4);



/*
JavaScript Loose Equality with Array and Number

1. What is this code?
   - Compares an array `[4]` with the number `4` using loose equality (`==`)
   - Logs the result

2. Output:
   true

3. Why:
   - `==` triggers type coercion when operands are different types
   - The array `[4]` is converted to a string `"4"` via `.toString()`
   - The string `"4"` is then converted to the number `4`
   - So the comparison reduces to `4 == 4`, which is true

4. Key Takeaways:
   - Arrays are coerced to strings when compared to primitives using `==`
   - JavaScript’s loose equality can produce unexpected but consistent results based on coercion rules
*/

