let i = 1;

//For Loop --> start; ende;sprungwert
for (let i = 1; i < 10; i++) {
  console.log("Marc Ehrlich ist in einem dunklen Raum" + i);
}

console.log("Ich bin raus aus der Schleife");

let programmingLanguages = [
  "C#",
  "Python",
  "PHP",
  "Javascript",
  "Kotlin",
  "Java",
  "Ruby",
  "Go",
  "Rust",
  "Cobol",
  "Bash",
  "C++",
];

// x ist in diesem Fall nur eine Platzhaltervariable, die bei jedem Schleifendurchgang überschrieben wird.
for (x of programmingLanguages) {
  console.log(x);
}
console.log("Ich bin raus aus der Schleife");

let myName = "Ralf";
for (x of myName) {
  console.log(x);
}

let zahl = 20;
while (zahl < 100) {
  console.log("Javascript macht spaß");
  zahl = zahl + 1;
}

// dokument.write("Javascript ist cool" + "<br>")  <<<<----Liste untereinander anzeigen

//do/while Schleife --> Der Code wird garantiert mindestens einmal durchlaufen
let zahl2 = 10;
do {
  console.log("Javascript ist cool");
  zahl2++;
} while (zahl2 > 20);
