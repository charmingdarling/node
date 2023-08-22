const theBellsHells = [
  { name: "Chetney", strength: 18 },
  { name: "Fearne", strength: 7 },
  { name: "FCG", strength: 12 },
  { name: "Imogen", strength: 8 },
  { name: "Laudna", strength: 5 },
  { name: "Ashton", strength: 18 },
  { name: "Orym", strength: 10 },
];

// 1. forEach, iterate through an array w/o for-loop (doesn't return an array)
theBellsHells.forEach((player) => console.log(player.strength));

// Prints: [18, 7, 12, 8, 5, 18, 10]

// 2. Filter() returns a new array with only elements whose callback returns a truthy value
// Truthy values In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
// Falsy values In JavaScript, a falsy value is a value that is considered false when encountered in a Boolean context.

const notStronk = theBellsHells.filter(function (player) {
  return player.strength < 13;
});

console.log("\nNot Stronk:");
console.log(notStronk);

/* Prints (a new array, and only includes the returned 'true' values)

[
  { name: 'Fearne', strength: 7 },
  { name: 'FCG', strength: 12 },
  { name: 'Imogen', strength: 8 },
  { name: 'Laudna', strength: 5 },
  { name: 'Orym', strength: 10 }
]

*/

// 3. Map gives back a new array the same length as the first.
// Each element is passed into the callback.
// Whatever returned from the callback each iteration is what goes into that index of the new array.

// JSON.Stringify will give back everything in a string
console.log(JSON.stringify(theBellsHells));

/* ^--Expected to Print: --v
[{"name":"Chetney","strength":18},{"name":"Fearne","strength":7},{"name":"FCG","strength":12},{"name":"Imogen","strength":8},{"name":"Laudna","strength":5},{"name":"Ashton","strength":18},{"name":"Orym","strength":10}]
*/

const hasMuscles = theBellsHells.map((player) => {
  // Copy the object being iterated over so we don't affect the existing object (immutability)
  // This is not the ideal way of copying an object.
  const pObj = JSON.parse(JSON.stringify(player));
  // Do everything else the same
  if (pObj.strength >= 13) {
    pObj.hasMuscles = true;
  } else {
    pObj.hasMuscles = false;
  }
  // Return the new obj NOT the parameter.
  return pObj;
});

// In a map, you NEED to return "something" or else you get 'undefined' returned

/* 
3A. Let's try using const pObj = player instead of the JSON.parse and JSON.stringify. 
You're now overriding the object. 
So it will show the 3rd property value hasMuscles to be true/false. 
We don't want to override the original object.

Note: 
There is a different and better way to iterate instead of using JSON parse and stringify called the spread operator using "..."
It copies objects and arrays.

const pObj = player will print -v

[
  { name: 'Chetney', strength: 18, hasMuscles: true },
  { name: 'Fearne', strength: 7, hasMuscles: false },
  { name: 'FCG', strength: 12, hasMuscles: false },
  { name: 'Imogen', strength: 8, hasMuscles: false },
  { name: 'Laudna', strength: 5, hasMuscles: false },
  { name: 'Ashton', strength: 18, hasMuscles: true },
  { name: 'Orym', strength: 10, hasMuscles: false }
]

*/

console.log("\nBells Hells: ");
console.log(theBellsHells);

console.log("\nStrong Characters? ");
console.log(hasMuscles);

/* 

Bells Hells:
[
  { name: 'Chetney', strength: 18 },
  { name: 'Fearne', strength: 7 },
  { name: 'FCG', strength: 12 },
  { name: 'Imogen', strength: 8 },
  { name: 'Laudna', strength: 5 },
  { name: 'Ashton', strength: 18 },
  { name: 'Orym', strength: 10 }
]

Strong Characters?
[
  { name: 'Chetney', strength: 18, hasMuscles: true },
  { name: 'Fearne', strength: 7, hasMuscles: false },
  { name: 'FCG', strength: 12, hasMuscles: false },
  { name: 'Imogen', strength: 8, hasMuscles: false },
  { name: 'Laudna', strength: 5, hasMuscles: false },
  { name: 'Ashton', strength: 18, hasMuscles: true },
  { name: 'Orym', strength: 10, hasMuscles: false }
]

*/

// 4. Find doesn't return a new array. It returns the 1st element in the array that comes back true. This will return Chetney and not Ashton.

const strengthOfEighteen = theBellsHells.find(
  (player) => player.strength === 18
);

console.log("\nStrength of 18", strengthOfEighteen);

// 5. Sort. Display in ascending a to b order according to strength value. Remember, there are 2 arguments now, so you need a parentheses.
// Sort values. a.strength and b.strength. ? (if) , : (else). If a > b, return 1, else return -1.

const sortedAPlayers = theBellsHells.sort((a, b) =>
  a.strength > b.strength ? 1 : -1
);

console.log("\nSorted by Ascending Strength", sortedAPlayers);

// 5A. If you want to reverse sort it, just flip the > to <.

const sortedDPlayers = theBellsHells.sort((a, b) =>
  a.strength < b.strength ? 1 : -1
);

console.log("\nSorted by Descending Strength", sortedDPlayers);

// 6. Reduce, reduces all of your values in your array down to one.
// Like if you wanted to get the total price in a shopping cart. Or average score of students in your class.
// Let's get the average strength of our players.

const avgStrength =
  theBellsHells.reduce(
    (accumulator, player) => accumulator + player.strength,
    0
  ) / theBellsHells.length;

console.log("\nThe average strength of The Bells Hells is:", avgStrength);

// 6A. You can also get the total with this method. Just don't divide by the length.

const totalStrength = theBellsHells.reduce(
  (accumulator, player) => accumulator + player.strength,
  0
);

console.log("\nThe total strength of The Bells Hells is:", totalStrength);
