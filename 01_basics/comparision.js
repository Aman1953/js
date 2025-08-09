console.log(null>0); // false
console.log(null<0); // false
console.log(null == 0); // false (this is equality check, not comparision)
console.log(null >=0); // true (in comparision operator null is first converted into 0)

// ===   Strict Equality
console.log("2"===2) // false

console.log(typeof 2343434n); // bigint


console.log(typeof null); // object (this is a known bug in JavaScript, null is not an object, but typeof null returns "object")
console.log(typeof undefined); // undefined (this is the only type that returns itself)


const id = Symbol("123");
const id2 = Symbol("123");
console.log(id === id2); // false (symbols are unique, even if they have the same description)
console.log(typeof id); // symbol (this is a new primitive type in JavaScript, used for unique identifiers)