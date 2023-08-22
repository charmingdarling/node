// TODO: What are we importing?
const fs = require("fs");

// TODO: Add comments to explain each of the three arguments of appendFile()
fs.appendFile("log.txt", `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log("Commit logged!")
);

// Now type in the terminal: node index "That is it."
// If you do not use the quotation marks, it will only print "That"

// In the fs file, we are going to append the 'log.txt' file.
// The second argument will be appended.
// If there is an error, comment err.
// Otherwise, log 'Commit logged!'

// fs.appendFile("log.txt", `${process.argv.slice(2).join(" ")}\n`, (err) =>
//   err ? console.error(err) : console.log("Commit logged!")
// );

// The file above will split and join a comment not in quotes.
// If you type in the terminal: node index This is it. It will print in the log.txt 'This is it'.
