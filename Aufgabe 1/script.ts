// Aufgabe 1//
let nn = [0];
var x;
const Check = window.prompt('Geben Sie Ihren Namen ein', '');
if (Check == '') {
    alert('Keine Angabe');
}
else {
    nn.push(Check);
    console.log(nn[0]);
}
window.addEventListener("load", function () {
    const newLocal = document.getElementById("ErsterSchritt");
    let newLocal_1 = newLocal.innerHTML;
    newLocal_1 = nn[0];
});
//# sourceMappingURL=script.js.map
