import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function Addi(zahl1, zahl2) {
  let Ergebnis = zahl1 + zahl2;
  return Ergebnis;
}

function gRoot(zahl1) {
  let Ergebnis = Math.sqrt(zahl1);
  return Ergebnis;
}

const heute = new Date();
const utc = new Date().toUTCString();

let customStyle = {
  color: "green",
  fontSize: "75px",
  border: "10px solid black",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1 className="ha1">Hausaufgaben Styling ist Cool!</h1>
    <h2 style={customStyle}>Cooler InlineStyle Farbe_Größe ändern</h2>
    <h3 style={customStyle}>Das Ergebnis ist: {Addi(104, 206)} </h3>
    <h4 style={customStyle}>Die Wurzel aus 81 ist : {gRoot(81)}</h4>
    <p style={customStyle}> {Math.round(Math.random() * 100)}</p>
    <p style={customStyle}>Das aktuelle Datum ist: {utc} </p>
  </>
);
