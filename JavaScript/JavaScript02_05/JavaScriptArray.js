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

console.log(programmingLanguages.length);
// First Element
console.log(programmingLanguages[0]);
// Last Element
console.log(programmingLanguages[programmingLanguages.length - 1]);
// push fügt etwas in die Liste hinzu
programmingLanguages.push("C");
console.log(programmingLanguages);

// pop entfernt NUR das letzte Element
programmingLanguages.pop();
console.log(programmingLanguages);

// unshift fügt am Anfang der Liste etwas hinzu
programmingLanguages.unshift("PowerShell");
console.log(programmingLanguages);

// shift entfernt am Anfang der Liste etwas hinzu
programmingLanguages.shift("PowerShell");
console.log(programmingLanguages);
// splice() --> Funktionalität um gezielter zu löschen und hinzuzufügen
