class Parent {
	foo = 42;
}

class Child extends Parent {
	foo = 55;
}

let obj = new Child();
console.log(obj.foo);

/*
This JavaScript code demonstrates field overriding in a class inheritance chain.

Explanation:

The Parent class defines a field foo with the value 42.
The Child class extends Parent and overrides the foo field with the value 55.
When an instance of Child is created, the foo field from Child takes precedence over the inherited one.
As a result, accessing obj.foo returns 55.
*/
