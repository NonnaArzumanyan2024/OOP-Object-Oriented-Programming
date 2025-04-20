function foo(a,b,c,d,e) {
	console.log(this.x, a,b,c,d,e);
}

const func = foo.bind({x:10}, 1,2,3);
func(1,2,3,4,5);


/*

Description:
This code defines a function `foo` that logs `this.x` and five arguments.
The function is partially applied using `.bind()` to preset `this` and the first three arguments (1, 2, 3).
Later, it is called with more arguments (1, 2, 3, 4, 5), but only the remaining two parameters (d, e) are used.

Output:
10 1 2 3 1 2

Why:
The `.bind()` method permanently sets `this` to `{ x: 10 }` and pre-defines the first three arguments.
When the bound function is called, the provided arguments are appended after the pre-bound ones.
Thus, the full argument list becomes (1, 2, 3, 1, 2), and `this.x` is 10.

*/

