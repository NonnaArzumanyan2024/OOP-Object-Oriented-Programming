class A {
    static foo() {
        console.log("OK");
    }
}

class B extends A {};
B.foo();




/*

  1. Demonstrates static method inheritance in JavaScript

  2. Output:
     "OK"

  3. Key Points:
     - Static methods belong to the class itself, not instances
     - Child classes inherit static methods from their parent
     - Can be called directly on the class: B.foo()
     - Attempting to call foo() on an instance (e.g., new B().foo()) would throw a TypeError

*/

