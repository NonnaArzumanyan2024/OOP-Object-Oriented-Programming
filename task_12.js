class Foo {
	#prop = 42
	
	get prop () {
		return this.#prop
	}
}

let bar = new Foo();
bar.prop = 144;
console.log(bar.prop);//42

/*
Explanation:
 
In the code, we are trying to set the value of `bar.prop` to `144`. However, since there is no setter method defined for `prop`, this assignment does nothing. The `get prop()` method only returns the value of the private field `#prop`, which remains `42`.  
If we want to modify `#prop`, we need to define a setter method.

*/
