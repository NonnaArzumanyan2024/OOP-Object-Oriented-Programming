const obj = {name:"Nonna"};
Object.defineProperty(obj, "age", {value:33, enumerable:true});
for (let key in obj) {
	console.log(key);
}




/*  

1. This code creates an object with a property "name", then adds a new enumerable property "age" using Object.defineProperty().  
2. It will print:  
   name  
   age  
3. Because "for...in" loops iterate over all enumerable properties (both "name" and "age" are enumerable here).  

*/

