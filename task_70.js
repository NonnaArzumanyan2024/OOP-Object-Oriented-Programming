const obj1 = {name:"Nonna"};
const obj2 = {name:"Sona"};

let p = {};
p[obj1] = 42;
p[obj2] = 152;

console.log(p[obj1]);





/*

1. Demonstrates using objects as keys in JavaScript objects
2. Output: 152 
3. Because:
   - Objects used as keys get stringified to "[object Object]"
   - Both obj1 and obj2 become the same key, so p[obj2] overwrites p[obj1]

*/



