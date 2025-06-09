class A {
	constructor() {
		console.log("A");
	}
}

class B extends A {
	constructor() {
		console.log("B");
		super();
	}
}

class C extends B {
	constructor(){
		super();
		console.log("C");
	}
}

class D extends C {
	constructor(){
		super();
		console.log("D");
	}
}

let app = new D();
	


/*

1. Demonstrates multi-level class inheritance chain

2. Output order:
   B
   A
   C
   D

3. Execution flow:
   - Construction starts with D, calling super() up to A
   - console.log runs in reverse order after reaching base class
   - B logs before its super() call (unique to this example)
   - Then A → C → D complete in order

*/
