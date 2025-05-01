const obj = {name:"Nonna"};
Object.defineProperty(obj, "age", {value:42});
for (let key in obj) {
	console.log(key);
}



/*

Demonstrates property enumerability:

1. Creates object with enumerable 'name' property
2. Adds non-enumerable 'age' using defineProperty
   (default enumerable:false)
3. for-in loop only shows enumerable properties

Output: "name" (age is hidden because non-enumerable)

*/
