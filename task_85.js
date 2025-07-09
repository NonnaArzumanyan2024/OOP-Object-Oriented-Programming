const obj = {
  toString() {
    return "5";
  },
  valueOf() {
    return 10;
  }
};

let result = obj + 5;     
result += obj;            
result += obj + "2";      
                          
console.log(result);      


/*
JavaScript Object Type Conversion Demo (Corrected)

1. What this code does:
   - Defines an object with custom toString() and valueOf() methods
   - Performs mixed arithmetic and string concatenations showing type coercion rules

2. Output:
   "2552" (string)

3. Explanation:
   - obj + 5 → numeric context → uses valueOf(): 10 + 5 = 15
   - result += obj → numeric addition: 15 + 10 = 25
   - obj + "2" → string context → uses toString(): "5" + "2" = "52"
   - result += "52" → string concatenation: 25 + "52" = "2552"

Key points:
- valueOf() is used when JS expects a number
- toString() is used when JS expects a string
- The '+' operator triggers either addition or concatenation depending on operand types
*/

