// =====================
// LOGICAL AND OPERATOR
// =====================
const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("VALID PASSWORD!")
} else {
    console.log("INCORRECT FORMAT FOR PASSWORD!")
}

// =====================
// REVISITING AGE EXAMPLE
// =====================

// 0-5 free 
// 5-10 $10 
// 10-65 $20
// 65+ free

const Age = 100;
if ((Age >= 0 && Age < 5) || Age >= 65) {
    console.log("FREE");
} else if (Age >= 5 && Age < 10) {
    console.log("$10")
} else if (Age >= 10 && Age < 65) {
    console.log("$20")
} else {
    console.log("INVALID AGE!")
}

// let firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("TRY AGAIN!!!");
// }

// =====================
// COMBINING && and ||
// =====================
const age = 8;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("YOU ARE NOT A BABY OR A SENIOR!")
}



