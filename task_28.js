class A {}
class B extends A{}
class C extends A{}

let obj = new C();

console.log(obj instanceof A); //true
console.log(obj instanceof B); //false
console.log(obj instanceof C); //true


/*

This JavaScript code demonstrates the use of the `instanceof` operator and how inheritance works between classes.

- `class A` is a base class.
- `class B` and `class C` both extend from `A`, but they are unrelated to each other.
- An instance `obj` is created from class `C`.

Then, three `instanceof` checks are performed:

1. `obj instanceof A` → `true`  
   Because `C` inherits from `A`, and `obj` is an instance of `C`.

2. `obj instanceof B` → `false`  
   Although `B` and `C` share the same parent (`A`), they are **not** related to each other directly.

3. `obj instanceof C` → `true`  
   Because `obj` was created with `new C()`.

Console Output:
true  
false  
true

Key takeaway:
In JavaScript, `instanceof` checks if an object exists in the prototype chain of a class.  
Having two classes extend the same parent does not make them instances of each other.

*/

