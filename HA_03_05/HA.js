let button1 = document.getElementById("btn1");
let header1 = document.getElementById("header1");

button1.onclick = function () {
  header1.style.color = "blue";
};

let button2 = document.getElementById("btn2");
let header2 = document.getElementById("header2");

button2.onclick = function () {
  header2.style.backgroundColor = "yellow";
};

// addEventListener = Wenn der Button geklickt wird, wird überprüft, ob das Bild aktuell sichtbar ist oder nicht.
// var image = definiert eine Variable namens "image" (auf meiner HA.html)
// Display = "none" = Bild wird ausgeblendet
// Display = "block" = Bild wird angezeigt

document.getElementById("T1Button").addEventListener("click", function () {
  var image = document.getElementById("image");
  if (image.style.display === "none") {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
});

//Aufgabe 3

document.getElementById("vergroessern").addEventListener("click", function () {
  vergroessern();
});

document.getElementById("verkleinern").addEventListener("click", function () {
  verkleinern();
});

function vergroessern() {
  var T2container = document.getElementById("T2container");
  var width = T2container.offsetWidth;
  var height = T2container.offsetHeight;
  T2container.style.width = width * 1.2 + "px";
  T2container.style.height = height * 1.2 + "px";
}

function verkleinern() {
  var T2container = document.getElementById("T2container");
  var width = T2container.offsetWidth;
  var height = T2container.offsetHeight;
  T2container.style.width = width / 1.2 + "px";
  T2container.style.height = height / 1.2 + "px";
}
