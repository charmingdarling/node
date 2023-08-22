/*
We previously have used string concatenation when we want to put variables inside a string with quotes and a plus sign. (Ex: "this string" + "that string")

Now we can use template literals, which enables you to have multiple lines with the 'enter key'. You just use back tics. ` ... ` 

Initiate and terminate your string inside the back tics. 

`This string 
That string`

Inside your string, you will use syntax like this to refer to your variable, expression, or function. ${syntax}
*/

const usagi = {
  first: "Usagi",
  last: "Tsukino",
  origin: "Moon",
};

// getPlanet is a function that takes in a character object as a parameter and returns the object's property of origin
const getPlanet = (char) => char.origin;

// Statement is a string builder using template literals. The back tics surrounding the string lets us reference variables and call functions with ${}.

const statement = `My name is ${usagi.first} ${usagi.last}. 


I am the ${getPlanet(usagi)} Princess.`;

console.log(statement);

// Prints: `My name is Usagi Tsukino. I am the Moon Princess.`

// Note: You cannot put the object into template literal. It will read object.

//Example:

// const statement = `My name is ${usagi};
