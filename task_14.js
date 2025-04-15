class Person {
	#salary = 250000
	getSalary () {
		return this.salary;
	}
}

let p = new Person();
console.log(p.getSalary());//undefined

/*
Explanation:
 
The class defines a private field `#salary`, but the method `getSalary()` tries to access `this.salary`, which refers to a public field that does not exist.  
As a result, `this.salary` is `undefined`, and the method returns `undefined`.

To fix it, use `this.#salary` to access the private field.
*/
