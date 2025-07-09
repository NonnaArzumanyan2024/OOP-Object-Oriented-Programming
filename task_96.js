let s1 = new String("Nonna");
let s2 = new String("Nonna");

console.log(s1 == s2);



/*
JavaScript String Object Comparison Example

1. What is this code?
   - Creates two String objects using `new String("Nonna")`
   - Compares them using the `==` operator (loose equality)

2. Output:
   false

3. Why:
   - `new String()` creates wrapper objects, not primitive strings
   - `s1` and `s2` are two separate objects in memory
   - When comparing two objects with `==`, JavaScript checks for reference equality
     → i.e., whether both refer to the exact same object (not just the same value)
   - Since `s1 !== s2` (they're different objects), the result is false

4. Key Takeaways:
   - Use string literals (`"Nonna"`) instead of `new String()` unless absolutely needed
   - Comparing objects (even with same content) results in false unless they are the same reference
   - Prefer `===` over `==` for more predictable comparisons
*/

