class Example {
	count = 10;
	set Count(value) {
		this.count = value;
	}
	get Count() {
		return this.count - 2;
	}
}

const obj = new Example();
obj.count = 52;
console.log(obj.Count);


/*

1. Demonstrates JavaScript class getters/setters with direct property access
2. Output: 50
3. Explanation:
   - The class has:
     * A public field 'count' initialized to 10
     * A setter 'Count' that updates 'count'
     * A getter 'Count' that returns count - 2
   - Line 12 directly modifies 'count' to 52 (bypassing the setter)
   - Line 13 accesses via getter, which applies the -2 transformation
   - Key distinction: 'count' vs 'Count' (case matters)
   - Note: Direct property access avoids setter logic

*/
