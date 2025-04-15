class Foo {
	constructor () {
		this.bar = function(){}
	}
}

let a = new Foo();
let b = new Foo();
console.log(a.bar == b.bar); //false

/*
**Explanation:**  
Here, `bar` is defined inside the constructor,  
so each object gets a new function instance.  
Therefore, `a.bar == b.bar` is false.
*/
