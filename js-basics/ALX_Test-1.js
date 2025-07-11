let name ="kepha";
let age = 15;
let isStudent = true;
let address = {
    city: "Nairobi",
    country: "Kenya"
}
let hobbies = ["coding", "traveling"];
let undefinedVariable; null
// This variable is intentionally left undefined
let symbolVariable = Symbol("unique");

console.log("Name:", name, "Age", age, "Are you a student?", isStudent, "Where do you live?", address, "Hobbies", hobbies,);

function greet() {
    console.log("Hello, " + name);
}

greet();

function askAge() {
    console.log("How old are you " + name + "?");
}

askAge();

if (age < 18) {
    console.log("Age Not Allowed");
}
else {
    console.log("Allowed");
}


