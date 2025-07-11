let name = "Nuri";
let age = 30;
let isStudent = false;
let hobbies = ["reading", "DIY", "hiking"];
let address = {
    city : "Muchatha" ,
    country : "Kenya"
};
let undefinedVariable; // This variable is declared but not initialized
let nullVariable = null; // This variable is explicitly set to null

console.log("Name", name, "Age", age, isStudent, "Hobbies", hobbies, address, undefinedVariable, nullVariable);

console.log (typeof "Name", name); // string
console.log (typeof "Age", age); // number
console.log (typeof isStudent); // boolean
console.log (typeof "Hobbies", hobbies); // object (arrays are of type object in JavaScript)
console.log (typeof "Address", address); // object
console.log (typeof undefinedVariable); // undefined
console.log (typeof nullVariable); // object (this is a known JavaScript quirk) 

