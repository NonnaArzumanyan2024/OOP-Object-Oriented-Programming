class Foo {
	prop = 42
	get prop () {
		return 100;
	}
}

let bar = new Foo();
console.log(bar.prop);//42

/*
Explanation:

Although the class defines both a property field `prop = 42` and a getter `get prop()`, the field assignment in the class body (`this.prop = 42`) overwrites the getter during object construction.  
In JavaScript (specifically in Node.js), class fields are set on the instance, and they can override getters from the prototype.  
As a result, `bar.prop` refers to the field, not the getter, so the output is `42`.
*/

