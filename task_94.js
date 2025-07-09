class A {
	constructor(num){
		this.num = num
	}
	valueOf(){
		return this.num
	}
}

let arr = [new A(1), new A(2), new A(3)];
let s = arr.reduce((a,b) => a + b);
console.log(s);



/*
JavaScript Custom Object Coercion with valueOf()

1. What is this code?
   - Defines a class `A` that stores a number and overrides `valueOf()`
   - Creates an array of A instances: [A(1), A(2), A(3)]
   - Uses `reduce()` to sum up the array elements
   - Logs the final result

2. Output:
   6

3. Why:
   - `reduce()` applies the callback function cumulatively:
     Step 1: A(1) + A(2) → 1 + 2 = 3  (uses valueOf())
     Step 2: 3 + A(3)   → 3 + 3 = 6
   - JavaScript automatically calls `valueOf()` on objects when used in numeric operations

4. Key Takeaways:
   - You can define custom behavior in numeric contexts by overriding `valueOf()`
   - `reduce()` is a powerful way to accumulate values in an array
   - JS coercion rules apply even when objects are used with `+` operator
*/

