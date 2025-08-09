let score = "221a";

// console.log( Number(null)) // 0
// console.log(Number(undefined)) //NaN
// console.log(typeof Number(score)) // Number
// console.log(Number(score)); // NaN
// console.log(Number(true)) // 1
// console.log(Number(false)); // 0

let isLoggedIn = "aman";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true
console.log(Boolean(NaN)); // false

// Some values are considered falsy (treated like false)
// ""   
// null
// undefined
// NaN
// false


// 0 -> false
// 1 -> true
// "" -> false
// "aman" -> true
