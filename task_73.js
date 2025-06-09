class Example {
    _count = 10;

    set Count(value) {
        this._count = value;
    }
    get Count() {
        return this._count - 2;
    }
}

const obj = new Example();
console.log(Object.hasOwn(obj, "_count")); 
console.log(Object.hasOwn(obj, "Count")); 



/*

Explanation
This code demonstrates the behavior of `Object.hasOwn()` when used with class fields and accessor properties.

Output:
    true
    false

Breakdown:
    - `Object.hasOwn(obj, key)` returns true only if the object itself (not its prototype) has a property named `key`.
    - `_count` is a data property defined directly on the instance → `hasOwn` returns true.
    - `Count` is defined as a getter/setter pair in the class → these are placed on the class prototype, not on the instance → `hasOwn` returns false.

Key Differences:
    - Data properties (like `_count`) are assigned directly to the instance.
    - Accessor properties (getters/setters like `Count`) are defined on the prototype.

Note:
    - `Object.hasOwn()` does **not** consider whether a property is enumerable.
    - It only checks if the property exists directly on the object (i.e., it's an "own property").

*/


