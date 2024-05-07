function jahrProof() {
  let jahr = document.getElementById("jahr").value;
  if (jahr % 4 === 0 && (jahr % 100 !== 0 || jahr % 400 === 0)) {
    document.getElementById("Ergebnis").innerText =
      jahr + " ist ein Schaltjahr.";
  } else {
    document.getElementById("Ergebnis").innerText =
      jahr + " ist kein Schaltjahr.";
  }
}
