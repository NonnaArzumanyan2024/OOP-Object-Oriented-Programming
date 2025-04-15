class Person {
	#salary = 250000
}

let p = new Person();
console.log(p.#salary);// SyntaxError

/*
Explanation:
  
The property `#salary` is private and cannot be accessed from outside the class.  
Trying to use `p.#salary` causes a SyntaxError.
*/
