class Foo {
	surname = "Arzumanyan";
	
	set age (value) {
		this.surname = value
	}
}

let bar = new Foo();
bar.age = 42;

console.log(bar.surname);


/*
Explanation:

Initially, the `surname` property is set to `"Arzumanyan"`.  
However, when the `age` setter is called with `42`, it sets `this.surname = 42`.  
As a result, `bar.surname` becomes `42`.
*/
