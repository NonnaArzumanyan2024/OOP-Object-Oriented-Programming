const obj = {

	toString(){
		return ["name"];
	},
	valueOf(){
		return "age";
	}
}

let p = {name:"Nonna", age:33};

console.log(p[obj]);




/*

1. Demonstrates object-to-primitive conversion during property access
2. Output: 33
3. Because:
   - obj converts to "age" via valueOf()
   - p["age"] exists with value 33

*/
