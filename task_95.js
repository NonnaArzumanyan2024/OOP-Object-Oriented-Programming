let arr = [1,2,3,4];

console.log(arr.toString());



/*
JavaScript Array toString() Method Example

1. What is this code?
   - Defines an array `arr` with numbers [1, 2, 3, 4]
   - Logs the result of calling arr.toString()

2. Output:
   "1,2,3,4"

3. Why:
   - In JavaScript, arrays inherit a custom `toString()` method from Array.prototype
   - It converts each element to a string and joins them using commas
   - So, [1, 2, 3, 4].toString() becomes "1,2,3,4"

4. Key Takeaways:
   - Array.toString() does not return JSON
   - It produces a simple comma-separated string
   - Useful in implicit conversions (like alert(arr), or "" + arr)
*/

