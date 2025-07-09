let obj = {
	toString(){
		return 8;	
	},
	valueOf(){
		return 4;
	}
}

let p = 2 * obj;
p += obj;
p += obj + "3";
console.log(p);


/*
JavaScript Object Type Conversion Demo

1. Code behavior:
   - Creates an object with custom toString() and valueOf()
   - Shows how JS uses implicit type coercion during operations

2. Output: 
   "1243" (string)

3. Explanation:
   - Step 1: 2 * obj → valueOf() → 2 * 4 = 8
   - Step 2: p += obj → valueOf() → 8 + 4 = 12
   - Step 3: obj + "3" → valueOf() → 4 + "3" = "43"
             → p += "43" → 12 + "43" = "1243"

Key points:
- valueOf() is used in numeric contexts (e.g., multiplication, addition)
- When a string is involved, JS uses string coercion
- Demonstrates how JS decides between valueOf and toString depending on context
*/

