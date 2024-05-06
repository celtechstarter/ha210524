// Aufgabe 1:

// Nehmen wir an, du hast eine traditionelle Funktion, die zwei Zahlen addiert.
// Deine Aufgabe ist es, diese Funktion in eine Arrow Function umzuwandeln.

// function add(a, b) {
//     return a + b;
//   }

const add = (a, b) => a + b;

console.log(add(7, 3));

///////////////////////////////////////////////////////////////////////////////

// Aufgabe 2:

// Verwende eine Arrow Function in Kombination mit der Array-Methode .filter(),
// um ein Array von Zahlen zu filtern und nur diejenigen
//Zahlen zurückzugeben, die größer als 10 sind.

let numbers = [5, 11, 8, 20, 7, 15];

const celChris = numbers.filter((number) => number > 10);
console.log(celChris);

//Aufgabe 3:

// Du hast ein Array von StringList:
// Erzeuge ein neues Array in dem alle Tiere in ausschließlich in
// Großbuchstaben geschrieben sind.

// Erzeuge ein neues Array in dem alle Tiere in ausschließlich in Kleinbuchstaben
// geschrieben sind.

let animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra"];

// toLowerCase = alles kleiner machen
const Kleinbuchstaben = animals.map((str) => str.toLowerCase());
console.log(Kleinbuchstaben);

// toUpperCase = alles Groß machen
const Großbuchstaben = animals.map((str) => str.toUpperCase());
console.log(Großbuchstaben);

/////////////////////////////////////////////////////////////////

// Aufgabe 4 :

// Du hast ein Array von Objekten, bei dem jedes Objekt eine Person mit einem Namen und
// Alter darstellt.
// Verwende eine Arrow Function mit der .map() Methode, um ein neues Array
// zu erstellen, das nur die Namen der Personen enthält.

let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const census = people.map((person) => person.name);
console.log(census);
