console.log([4] == [4]);



/*
JavaScript Array Comparison Example

1. What is this code?
   - Compares two array literals [4] and [4] using the `==` operator
   - Logs the result to the console

2. Output:
   false

3. Why:
   - Arrays are objects in JavaScript
   - `==` (loose equality) compares object references, not contents
   - `[4] == [4]` creates two different array objects in memory
   - Since they are not the same reference, the comparison returns false

4. Key Takeaways:
   - Even if two arrays have identical contents, comparing them directly with `==` or `===` will return false unless they are the same object
   - To compare arrays by value, you must check each element manually or use helper functions (e.g., JSON.stringify, deep equality checks)
*/

