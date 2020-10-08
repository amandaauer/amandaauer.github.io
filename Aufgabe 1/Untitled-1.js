// Aufgabe 1//
console.log("Handy1");
window.onload = function () {
    document.getElementById("Taste 1").addEventListener("click", ChangeText1);
    document.getElementById("Taste 2").addEventListener("click", ChangeText2);
    window.alert("Einmal klicken um zu starten");
    document.getElementById("Taste 3").addEventListener("click", ChangeNumbers);
    newelements();
    console.log("Meine Seite");
};

}
//HTML mit TypeScript//
function newelements() {
    let heading = document.createElement("h3");
    let element = document.getElementById("06");
    element.appendChild(heading);
    let paragraph = document.createElement("p");
    node = document.createTextNode("erstellt keinen Paragraphen");
    paragraph.appendChild(node);
    element = document.getElementById("06");
    element.appendChild(paragraph);

//# sourceMappingURL=script.js.map
//# sourceMappingURL=script.js.map