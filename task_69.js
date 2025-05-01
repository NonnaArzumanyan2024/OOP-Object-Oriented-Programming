console.log(Object.is(NaN, NaN));
console.log(Object.is(0, -0));





/*

1. This code demonstrates JavaScript's Object.is() method for strict equality comparison.
2. It will output:
   true
   false
3. Because:
   - Object.is(NaN, NaN) is true (special NaN equality)
   - Object.is(0, -0) is false (differentiates +0/-0)

*/
