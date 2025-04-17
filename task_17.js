class A {};
class B extends A {};
class C extends B {};

let a = new C();

console.log(a instanceof A);//true
console.log(a instanceof B);//true
console.log(a instanceof C);//true

/*
Explanation:

Class C inherits from B, which in turn inherits from A.
The object a is created from class C.
Because of inheritance, a is also an instance of both B and A.
The instanceof operator checks whether an object is an instance of a given class or any of its parent classes.
*/
