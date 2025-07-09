console.log(+[[[42]]]);


/*
JavaScript Unary Plus with Nested Arrays

1. What is this code?
   - Applies the unary plus operator (+) to a deeply nested array `[[[42]]]`
   - Logs the result

2. Output:
   42

3. Why:
   - Unary plus tries to convert its operand to a number
   - The array `[[[42]]]` is coerced to a primitive using ToPrimitive with a "number" hint
   - Conversion steps:
     - `[[[42]]].toString()` → "42"
     - Unary plus converts "42" → 42 (number)
   - So the expression becomes: +[[[42]]] → +"42" → 42

4. Key Takeaways:
   - Unary plus triggers numeric coercion
   - Arrays are first converted to strings via `.toString()`
   - Nested arrays flatten into a string during coercion (e.g., [[[42]]] → "42")
*/

