// >, >, == , ===, !=, !==

let x = 7;
// is equal to / is not equal to
console.log("Hallo" == "hallo"); //false
console.log(x == 7); //true
console.log(8 != 10); //true
console.log(3 == 3); //true
console.log("3" == 3); //true --> vergleicht nur den "Inhalt"
console.log("3" === 3); //false --> Hier vergleicht er den Inhalt UND den Datentypen
console.log("3" !== 3); // true
console.log(2 + 1 == 3); // true

console.log("----------------------------------------");
//is greater than
console.log(4 > 3); //true
console.log(3 > 7); //false

console.log("----------------------------------------");
// is less than
console.log(4 < 3); //false
console.log(3 < 7); // true
console.log(18 < 18); // false

console.log("----------------------------------------");

// is less/greater than or equal
console.log(18 <= 18); // true
console.log(18 >= 18); // false

console.log("----------------------------------------");

let alter = 20;

if (alter > 18) {
  console.log("Du bist berechtigt den Horrorfilm dir anzuschauen");
} else if (alter < 18) {
  console.log("Du bist zu Jung!");
} else {
  //Hier würde der Code ausgeführt werden, wenn die oberen Bedingungn nicht true sind
  console.log("Bitte gib ein Alter an");
}

console.log("----------------------------------------");
// bmi Calculator

// gewicht / (Größe * größe) Beispiel (50kg geteilt durch größe mal größe)

let gewicht = 100;
let hoehe = 1.9;
let bmi = gewicht / (hoehe + hoehe);

console.log(bmi);

// &&(and) --> Der komplette Ausdruck ist erst true, wenn beide Ausdrücke in sich selber true sind
// ||(or) --> Sobald einer der Bedinungen true ist, ist der ganze Ausdruck True
if (bmi <= 18.5) {
  console.log("Du bist untergewichtig");
} else if (bmi > 18.5 && bmi <= 24.9) {
  console.log("Du hast ein gesundes Gewicht!");
}
//25-29.9
else if (bmi > 24.9 && bmi <= 29.9) {
  console.log("Du hast Übergewicht!");
} else {
  console.log("Fettleibig");
}
console.log("----------------------------------------");
