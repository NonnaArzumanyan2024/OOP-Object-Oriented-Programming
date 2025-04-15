class Calc{
	constructor (num) {
		this.num = num
	}

	add (a = 1) {
		this.num += a
	}
}

const p1 = new Calc(4);
p1.add();
p1.add();
p1.add(2);
console.log(p1.num); //8 

/*
The `Calc` object is initialized with `num = 4`.  
The `add()` method is called three times:  
- First two times without arguments → adds 1 each time.  
- Third time with `2` → adds 2.  
Total: 4 + 1 + 1 + 2 = 8.
*/

