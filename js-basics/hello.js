let userName = "John";

let askAge = function() {
    let userAge = Number(prompt("Please enter your age, " + userName + ":"));
    console.log("You said you are " + userAge + " years old?");
    return userAge;
};

let age = askAge();

console.log("Name:", userName, "Age:", age);