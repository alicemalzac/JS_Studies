// Comparison Operators (<, >, ==, !=)
console.log("\n****Comparison Operators****\n")

let age1 = 22;
let age2 = 15;

let age1Entry = age1 > 18;
console.log (age1Entry);

let age2Entry = age2 > 18;
console.log (age2Entry);

// Falsy = false, undefined, null, "", 0, NaN(Not a Number)

let z = 5;
let y = 3;

if (z < 6){
    console.log ('It`s less than 6!')
} else {
    console.log ('It isn`t less than 6!')
}

// Assignment Operators (=, +=, -=, *=)

console.log("\n****Assignment Operators****\n")
var x = 3;
console.log("x = " + x)
console.log("x += 1 gives x = " + (x+=1)) // adds 1
console.log("x -= 1 gives x = " + (x-=1)) // subtracts 1
console.log("x *= 3 gives x = " + (x*=3)) // multiplies 3 with x

// Logical Operators (&&, ||, ! )

console.log("\n****Logical Operators****\n")
console.log("1 OR 1 = " + (1 || 1)) // 1 OR 1
console.log("1 OR 0 = " + (1 || 0)) // 1 OR 0
console.log("0 OR 0 = " + (0 || 0)) // 0 OR 0
console.log("1 AND 1 = " + (1 && 1)) // 1 AND 1
console.log("1 AND 0 = " + (1 && 0)) // 1 AND 0
console.log("0 AND 0 = " + (0 && 0)) // 0 AND 0
console.log(!true)  // NOT TRUE
console.log(!1)     // NOT TRUE
console.log(!false) // NOT FALSE
console.log(!0)     // NOT FALSE

// Comma Operator ( , ): Evaluates each operand from left to right and returns the value of right most operand.

console.log("\n****Comma Operator****")
var a = 4;
a = (a++, a);
console.log("The value for expression with comma operator is: " + a) //returns 5

// Bitwise Operators (&, |, ^)

console.log("\n****Bitwise Operators****")
console.log("Bitwise AND of 5 and 1: " + (5 & 1)) //returns 1
console.log("Bitwise OR of 5 and 1: " + (5 | 1)) // returns 5 
console.log("Bitwise XOR of 5 and 1: " + (5 ^ 1)) //returns 4

// String Operators (+)

console.log("\n****String Operator****")
console.log("Concatenation" + " (+)" + " operator in action")

//Conditional Operators (? :)

console.log("\n ****Conditional Operator****")
var num_of_months = 13
var ans = (num_of_months > 12) ? "Invalid" : "Valid"
console.log(ans) //Returns Invalid

console.log("\n ****Ternary Operator****")
var elvisLives = Math.PI > 4 ? "Yep" : "Nope";

var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";

console.log( access ); // logs "Access granted"