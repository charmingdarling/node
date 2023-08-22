console.log(process.argv);
console.log(
  "First argument: My dog is named",
  process.argv[2],
  `"Momo" is her name.`,
  process.argv[2] === "Momo"
);

console.log(process.argv[2]);

// I'm having trouble understanding what the point of this is. How do I use it to make it useful.

// You can assign two different arguments to variables.

const a = process.argv[2];
const b = process.argv[3];

// Conditional Statement

if (a === b) {
  console.log(true);
} else {
  console.log(false);
}

// Using the ternary operator
// condition ? expression1 : expression2
// if the condition is true, expression1 is executed
// if the condition is false, expression2 is executed

console.log(a === b ? true : false);

// Comparing variables

console.log(a === b);

// Comparing argument values directly
console.log(process.argv[2] === process.argv[3]);
