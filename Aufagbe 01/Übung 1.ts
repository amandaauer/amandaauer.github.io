window.onload = function() {
    let person = prompt("Sag mir deinen Namen!", "Hier bitte");
    if (person != null) {
        document.getElementById("Hier ist dein Name:").innerHTML = "Hier ist dein Name:" + person + "!";
    }
}