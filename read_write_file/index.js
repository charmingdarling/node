// fs is a Node standard library package for reading and writing files
// fs is a package in this example, but if you want any other package, just write the string of the name of the package you require within the quotes; node knows where to find it

const fs = require("fs");

// readFile() takes in a path (the file it will read), options (we have been explained what this quite means, and the callback (which in this case is 2 functions))
// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile("data.csv", "utf8", (error, data) =>
  error ? console.error(error) : console.log(data)
);

// You may use split method to create an array of strings from the file you are reading.

fs.readFile("data.csv", "utf8", (error, data) =>
  error ? console.error(error) : console.log(data.split(","))
);

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]
const x = "Hello World!";
fs.writeFile("log01.txt", x, (err) =>
  err ? console.error(err) : console.log("Success!")
);
