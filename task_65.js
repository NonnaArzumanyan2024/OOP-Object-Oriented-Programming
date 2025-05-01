const obj = {username:"John", age:42};
const {username:first, age} = obj;
console.log(first);
console.log(username);



/*

Demonstrates object destructuring with renaming:
1. Creates object `obj` with username and age
2. Destructures `obj`, renaming (alias) `username` to `first`
3. Logs:
   - "John" (value of `first`)
   - ReferenceError (since `username` wasn't created - it was renamed to `first`)
Key point: Renaming in destructuring ({old:new}) doesn't create both names

*/
