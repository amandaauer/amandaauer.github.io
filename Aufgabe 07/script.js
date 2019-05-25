// Aufgabe 1//
console.log("Handy1");
window.onload = function () {
    document.getElementById("Taste 1").addEventListener("click", ChangeText1);
    document.getElementById("Taste 2").addEventListener("click", ChangeText2);
    window.alert("Einmal klicken um zu starten");
    document.getElementById("Taste 3").addEventListener("click", ChangeNumbers);
    console.log("Meine Seite");
};
// der Button verändert sich//
function ChangeText1() {
    console.log("Taste 1 geklickt");
    document.getElementById("Taste 1").innerHTML = "Mist es ändert sich nichts";
}
//Die Klasse verändert sich wenn geklickt wird//
function ChangeText2() {
    document.getElementById("Taste 3").className = "Klasse01";
    console.log("Neue Klasse!");
}
//HTML mit TypeScript//
function newelements() {
    let heading = document.createElement("h3");
    let node = document.createTextNode("LILALO");
    heading.appendChild(node);
    let element = document.getElementById("06");
    element.appendChild(heading);
    let paragraph = document.createElement("p");
    node = document.createTextNode("erstellt keinen Paragraphen");
    paragraph.appendChild(node);
    element = document.getElementById("06");
    element.appendChild(paragraph);
}
//Rechner//
function ChangeNumbers() {
    console.log("Taste 3 wurde angeklickt");
    let no1 = 1; //Zahlen
    let no2 = 2;
    let no3 = 3;
    let word1 = "IPhone oder"; //STring
    let word2 = "Samsung";
    no1 = 2; //Nun Wert2
    console.log(no1 + no2);
    console.log(word1 + word2);
    console.log(no2 + word2);
}
//# sourceMappingURL=script.js.map
//# sourceMappingURL=script.js.map