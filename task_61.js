let obj = {
	x:42,
	fn:function() {
		console.log(this);
	}
}

obj.fn.call(null);


/* 

  This code demonstrates how `this` behaves when a method is called using `.call(null)` 
  outside of strict mode.

  1. The object `obj` has a method `fn` which logs the value of `this`.
  2. The method is invoked as `obj.fn.call(null)`, which explicitly sets the `this` context to `null`.
  3. Because the code is not running in strict mode, JavaScript automatically substitutes `null` with the global object 
     (`window` in browsers, or `global` in Node.js).

  Output:
    [object global]  // in Node.js
    Window {...}     // in browsers

  Explanation:
    In non-strict mode, passing `null` (or `undefined`) as the `this` value in `.call()` results in the function being 
    executed with the global object as its `this` context. Therefore, `console.log(this)` prints the global object.

*/

