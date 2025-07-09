let obj = {
	name:"Nonna",
	toString(){
		return this.name;
	}
}

console.log("A" + obj);



/*
JavaScript Object to String Conversion Example

1. What is this code?
   - Defines an object `obj` with a `name` property
   - Implements a custom `toString()` method that returns the `name`
   - Uses string concatenation: "A" + obj

2. What will it print?
   - Output: "ANonna"

3. Why?
   - When using the `+` operator with a string and an object,
     JavaScript attempts to convert the object to a primitive string.
   - It uses the `ToPrimitive` algorithm with a "string" hint:
     → Calls `obj.toString()` → returns "Nonna"
   - Final expression: "A" + "Nonna" = "ANonna"

4. Key Takeaways:
   - Custom `toString()` methods let objects define how they behave in string contexts
   - The `+` operator triggers implicit coercion based on operand types
   - `obj + ""` or `"" + obj` will also return "Nonna" in this example
*/
