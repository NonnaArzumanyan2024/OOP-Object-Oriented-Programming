class A {
    #foo() {
        console.log("OK");
    }
}

class B extends A {
    bar() {
        this.#foo();
    }
}

let obj = new B();
obj.bar();





/*

  This code demonstrates private methods in JavaScript classes.

  class A defines a private method #foo().
  class B extends A and tries to access #foo() via this.#foo().

  Output:
    SyntaxError: Private field '#foo' must be declared in an enclosing class

  Explanation:
    - Private methods (with #) are only accessible inside the class where they are defined.
    - Subclasses (like class B) cannot access private members of their parent classes.
    - Attempting to do so results in a SyntaxError during parsing (before runtime).

*/

