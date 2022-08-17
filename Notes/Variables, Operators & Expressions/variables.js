// var: Function in which the variable is declared

function foo(){
    for (var i=0; i<5 ; i++){
      console.log(i);
    }
    console.log(i);
  }
  
  foo();

// const: Block in which the variable is declared
// - Default to const, because it cannot be re-assigned or re-declared


function render() {
    const users = [
      { name: 'Robin' },
      { name: 'Markus' },
    ];
}

render.users[0].name;

// let: Block in which the variable is declared
// - Block scopes are what you get when you use if statements, for statements or write code inside curly brackets.
// - Use let when you want to re-assign the variable in future
// - let is usually used in a for loop

//String 

let myString = 'Curso';

//Number

let myNumber = 20;

//Boolean

let myTrueBoolean = true;
let myFalseBoolean = false;

//Array 

let myNumberArray = [1, 2, 3, 4, 5];
let myStringArray = ["Hi", "My", "Name", "Is", "Alice"];
let myRandomArray = [ 1, "Hi", 2]; 

myNumberArray[0]; //returns '1'

//Object 

let person = {
    name: "Alice",
    age: 26, 
    city: "Fortaleza",
}; 

person.name; 
person.age;

