class Foo {
	bar () {
		console.log("Hello");
	}
}

class Qux extends Foo {};
class Quz extends Qux {};

let o = new Quz();
o.bar();

/*
This JavaScript code demonstrates multi-level class inheritance and how a method defined in a base class is accessible from an instance of a derived class through the prototype chain.

Explanation:

bar() is defined in the base class Foo.
Qux extends Foo, and Quz extends Qux, forming the inheritance chain: Foo → Qux → Quz.
An instance o is created from Quz.
JavaScript uses the prototype chain to find the bar() method in Foo, even though it's not defined in Quz or Qux.
*/
