// returns an array of command line arguments
// progress.argv are the strings of the names that come after the file
// console.log(process.argv) here will show 2 things. [0] is the location of node; [1] is the absolute path to the file
console.log(process.argv);

// -------------------------- //
// If you type into the terminal hello world after using a comparison, you can return true/false. (Terminal Input: node index hello world)

console.log(
  "First arg",
  process.argv[2],
  `is the arg "hello"`,
  process.argv[2] === "hello"
);

// arguments passed from the command line are accessed by index
console.log(process.argv[2]);
