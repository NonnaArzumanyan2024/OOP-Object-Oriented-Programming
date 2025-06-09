const obj = {name:"Nonna", age:33};
const {name, surname = "Arzumanyan"} = obj;

console.log(obj.surname);



/*

1. Demonstrates object destructuring with default values

2. Output: undefined

3. Key Points:
   - Destructuring extracts 'name' but doesn't modify original object
   - Default value 'Arzumanyan' creates new variable (not added to obj)
   - Original object remains unchanged (no 'surname' property exists)
   - Hence obj.surname is undefined

*/
