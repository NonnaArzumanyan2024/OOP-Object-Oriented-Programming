class Foo {
	bar (){}
}

let a = new Foo();
let b = new Foo();
console.log(a.bar == b.bar); //true

/*
In JavaScript, class methods are stored on the prototype.  
So both `a.bar` and `b.bar` point to the same function.  
That’s why `a.bar == b.bar` returns `true`.
*/
