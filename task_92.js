let arr1 = [1,2,3,4];
let arr2 = [4,5,6,7];

console.log(arr1 + arr2);



/*
JavaScript Array + Array Coercion Example

1. What is this code?
   - Defines two arrays: arr1 and arr2
   - Uses the `+` operator between them
   - Logs the result

2. Output:
   "1,2,3,44,5,6,7"

3. Why:
   - The `+` operator does not merge arrays
   - It converts both arrays to strings using the ToPrimitive algorithm
   - Arrays use `toString()` → arr1 becomes "1,2,3,4", arr2 becomes "4,5,6,7"
   - The two strings are then concatenated:
     "1,2,3,4" + "4,5,6,7" → "1,2,3,44,5,6,7"

4. Key Takeaways:
   - `arr1 + arr2` is not the same as `[...arr1, ...arr2]`
   - Use `concat()` or spread syntax for proper merging
   - Be careful with `+` between non-primitive types (objects, arrays)
*/

