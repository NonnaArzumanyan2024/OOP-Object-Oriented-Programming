class Person {
	#salary = 250000
}

let p = new Person();
p.salary = 250000;
console.log(p.salary); //250000

/*
Explanation:

The `#salary` field is private and cannot be accessed from outside the class.  
However, `p.salary` is a different property that was manually added to the object.  
This doesn't affect the private field `#salary`, so `p.salary` prints `250000`.
*/
