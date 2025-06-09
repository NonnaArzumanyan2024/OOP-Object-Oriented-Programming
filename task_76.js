const key = 101;
let obj = {
	["name" + key]:107
}

console.log(obj.name101);



/*

1. Demonstrates computed property names in object literals

2. Output: 107 

3. Why:
   - Creates property "name101" via string concatenation
   - Property value is set to 107
   - Accessing obj.name101 returns the value

*/
