class Person {
	constructor (name) {
		name = name
	}
}

const p1 = new Person("Nonna");
console.log(p1.name);//undefined

/*
Explanation:  

The constructor assigns `name = name`,  
which just reassigns the parameter to itself.  
It should be `this.name = name` to store it in the object.  
As written, `p1.name` is undefined.
*/
