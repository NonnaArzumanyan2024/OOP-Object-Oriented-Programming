const obj = {
	toString(){
		return "name"
	},
	valueOf(){
		return "age"
	}
}

let p = {name:"Nonna", age:33};
console.log(p[obj]);




/*

Demonstrates object-to-primitive conversion in property access:
1. Creates object `obj` with custom toString() and valueOf()
2. When used as property key, JavaScript:
   - Calls toString() (returns "name")
   - Uses result as property name
3. Output: "Nonna" (value of p["name"])
Key point: Objects used as keys are stringified via toString()

*/
