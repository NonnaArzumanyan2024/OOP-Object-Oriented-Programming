let obj = {a:1, b:2, c:3, d:4};
let proxify = new Proxy (obj, {
	deleteProperty:(target, key) => {
		let code = key.charCodeAt(obj);
		let actual = String.fromCharCode(code + 1);
		return Reflect.deleteProperty(target, actual);
	}
})

delete proxify.b;
console.log(proxify);


/*

1. Demonstrates Proxy's deleteProperty trap with character manipulation

2. Output: {a:1, b:2, d:4}

3. Why:
   - Deleting 'b' triggers proxy to delete next character property ('c')
   - Uses charCodeAt(0)+1 to determine which property to remove
   - Original object gets modified through proxy interception

*/
