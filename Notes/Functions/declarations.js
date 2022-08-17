// anonymous function

var myFunction = function()
{
  console.log("Hello! I'm an Anonymous function");
}

myFunction();

// Function Declaration 

function function_name(Arg1, Arg2){}

// Function Expression
//Named: 

var var_name = function function_name(Arg1,Arg2){};

//Anonymous:

var var_name = function(Arg1, Arg2){};

// Generator Function Declaration: function that uses yield keyword to return a Generator-Iterator object on which next method can be called later.

function* name(Arg1, Arg2) {}

// Generator Function Expression: Allows omitting name from the function.
// Named: 

function* function_name(Arg1,Arg2){};

//Anonymous: function* (Arg1,Arg2){};
// Arrow Function: A more concise way of writing a function in JavaScript

var var_name = (Arg1, Arg2) => {};

// Function Constructor: This is the least recommended way of declaring a function.

var var_name = new Function(Arg1, Arg2,'FunctionBodyString');

