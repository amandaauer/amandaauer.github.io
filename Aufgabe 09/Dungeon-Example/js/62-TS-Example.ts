interface Monster {
    monsterName: string; //Name 
    monsterHealthPoints: number;// Lebenspunkte
    monsterExperience: number;// Erfahrungspunkte
    monsterModifier: string []; //Monster-Verstärker
    monsterWeapon: string; //Waffe des Monsters
    monsterImage: string; //Bild des Monsters
}

let monsterHolder: string = "monsterHoldingCell"; // ID für das Haupt-Element, in welchem die Monster sich befinden werden. Wird vielleicht mehrfach in dem Skript gebraucht, deshalb einmalig definitiert.
let playerName: string = "Spielername"; // Ein paar globale Variablen, welche den Spieler darstellen.
let playerXP:number = 0; // Stellt die gesammelte Erfahrung des Spielers dar.
let playerXPperLevel: number = 500; // Da es nur einen Spieler gibt, ergibt sich noch nicht viel Sinn darin, für den Spieler ein interface (im Sinne der Programmierung) zu erste
let playerItems: string = "Axt und Schwert"

let prefix: string[] = ["kleine(s)", "gemeine(s)", "hässliche(s) ", "Wald-", "Katastrophen- ", "Kniescheibenzertrümmernde(s) "]; // length = 6, da 6 Einträge. Von 0-5.
let monsterName: string[] = ["Hexe", "Mammut", "Spinne", "Drache", "Frosch"]; // length = 5, da 5 Einträge. Von 0-2.
let suffix: string[] = [" vom Dorf", "des Schreckens", "mit Pilz", " mit Rheuma", " des Verderbens", " der Zerstörung"]; // length = 6, da hier 6 Einträge sind. Von 0-5.
let monsterModifers: string [] = ["ohne Sinn", "Trinker", "ohne Leben", "hat keine Ahnung", "Hass", "Müde", "Verwirrt", "Lebensscheu", "Bipolar", "Hat Schnupfen", "Dumm"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster.
let monsterWeapon: string [] = ["Schwert","Hammer","Axt","Pistole", "Wasser"]
let Images: string[]=["imgs/Drache.jpg","imgs/hexe.jpg","imgs/monster.jpg"]
 
let monsterArray: Monster[]= [];

window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    updatePlayerLevel(); // Zu Anfang wird durch eine Funktion ein HTML-Element mit Inhalt befüllt.
    console.log("" + document.getElementById("monsterSpawner").innerHTML);
}

console.log(document.getElementById("monsterSpawner").innerHTML);


function generateMonster() {
    let MonsterNr: number= getRNGNumber(3) + 1;// zwischen 1-3 Monster werden angezeigt
    for (let i= 0; i< MonsterNr; i++) //Schleife
    {
    let newMonsterWeapon: string = generatedMonsterWeapon();
    let newImage: string ;
    let newMonsterName: string = generateMonsterName(); // Eigens-gebaute Funktion, welche einen string zurück gibt.
    let newMonsterHP: number = generatedMonsterHealthPoints(); // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
    let newMonsterXP: number = generateMonsterXP(); // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
    let newMonsterModifier : string[] = generateMonsterModifer(); // Eigens-gebaute Funktion, welche ein string-Array zurück gibt.
    let newMonster: Monster = {
        monsterWeapon: newMonsterWeapon,
        monsterImage: newImage,
        monsterName: newMonsterName,
        monsterHealthPoints: newMonsterHP,
        monsterExperience: newMonsterXP,
        monsterModifier: newMonsterModifier,
    };
    monsterArray.push( newMonster); // Monster wird erst in diesem Schritt zu dem Array hinzugefügt 
    if(monsterArray.length !=0){
        console.log(monsterArray[monsterArray.length - 1].monsterExperience);
    }
}
    monsterGenerateHTML(monsterArray.length);
}
updateHTML(); 


function updateHTML(){
    clearMonsterCell();
    monsterGenerateHTMLAII();
    getMonsterCount();
}
function monsterGenerateHTMLAII()
{
    for(let i = 1; i <= monsterArray.length; i++)
    {
        monsterGenerateHTMLAII(i)
        console.log("Hierbei wurde"+i+"Monster generiert");
    }
}
function clearMonsterCell(){
    let MonsterCell= document.getElementById("monsterHoldingCell");
    if (MonsterCell.hasChildNodes){//Kindelement
        while (MonsterCell.firstChild){
            MonsterCell.removeChild(MonsterCell.firstChild); //löschen der Kindelemente

        }

    }
    console.log("KIndelement des MonsterCell wurde entfernt")
}
function getMonsterCount(){
    return monsterArray.length;
}
// Generiert HTML-Elemente, welche dann einem Element untergeordnet werden. Erzeugt ebenfalls einen Event-Listener auf dem Button.
function monsterGenerateHTML(count: number) {
    let holdingDiv: HTMLElement = document.createElement("div"); // Erstelle ein neues HTML-Element vom typ <div>. Es ist jedoch noch nicht zu sehen!
    holdingDiv.setAttribute("id", "monster" + count); // Die ID jedes neu-erstellten Monsters entspricht der aktuellen Array-Länge.
    holdingDiv.setAttribute("class", "monster"); // Klasse für Visuals.
    document.getElementById(monsterHolder).appendChild(holdingDiv); // Das HTML-Element muss erst noch zu einem Objekt hinzugefügt werden, in diesem Fall mit der id "monsterHoldingCell"
    let monsterName: HTMLElement = document.createElement("p"); // Generiere einen <p>
    monsterName.innerHTML = monsterArray[count - 1].monsterName; // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
    holdingDiv.appendChild(monsterName); // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.
    let monsterMod: HTMLElement = document.createElement("p"); // Generiere einen <p>
    monsterMod.innerHTML = monsterArray[count - 1].monsterModifier[0] + ", " + monsterArray[monsterArray.length - 1].monsterModifier[1]; // Inhalt des <p>: Monster-Modifizierer null und eins
    holdingDiv.appendChild(monsterMod); // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.
    let monsterImg: HTMLElement = document.createElement("img"); // Erstelle ein <img>-Element
    monsterImg.setAttribute("src",Images[generatedImage()]); // Der Pfad für das Bild muss über setAttribute festgelegt werden. Der Bildpfad kann natürlich auch anders aussehen.
    monsterImg.setAttribute("alt", "Schreckliches Monster"); // Das alt für das Bild wird hier festgelegt.
    holdingDiv.appendChild(monsterImg); // Füge das Bild zu dem holding-div hinzu (<div>, welche ein paar Zeilen zuvor erstellt worden ist)
    let monsterBtn: HTMLElement = document.createElement("BUTTON"); // Erstelle ein <button>-Element
    monsterBtn.innerHTML = "Monster bekämpfen!"; // Verändere den Inhalt des HTML-Elementes. Der genaue Text ist dabei euch überlassen.
    holdingDiv.appendChild (monsterBtn);
    let monsterCount: number = monsterArray.length;
    console.log("Aktuelle Anzahl an Monster:"+ monsterCount);
    monsterBtn.addEventListener('click', function (){
        fightMonster(monsterCount);
    },false);
}


// Wird für den Zugriff auf eine zufällige Stelle in einem Array aufgerufen.
// [ ] Optionale Aufgabe: verkleinere diesen Code auf eine Zeile mit nur einem Semikolon!
// Muss mit einer Zahl aufgerufen werden: getRNGNumber(5); // Liefert eine ganze Zahl zwischen 0 bis 4 zurück.
function getRNGNumber(_maxNumber: number): number{
     return Math.floor( Math.random () * _maxNumber);
}
// Diese Funktion gibt einen zusammengewürfelten Namen zurück.
// Wird für die Monster-generierung verwendet!
// Liefert einen zusammengesetzten String zurück.
function generateMonsterName(): string
 {
    let generatedMonsterName: string = ""; // Erstelle einen leeren String für das Monster
    // Monster-Vorname
    // Mathematik! Hier wird eine zufällig-generierte Zahl benötigt.
    let rngNumber: number = getRNGNumber(prefix.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Anfang) zu generieren.
    generatedMonsterName = prefix[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
    // Monster-Mittelname
    rngNumber = getRNGNumber(monsterName.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Mitte) zu generieren.
    generatedMonsterName += monsterName[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
    // Monster-Titel
    rngNumber = getRNGNumber(suffix.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Ende) zu generieren.
    generatedMonsterName += suffix[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
    return generatedMonsterName;
}

function generatedMonsterWeapon(): string 
{ 
    let generatedMonsterWeapon: string = "";
    generatedMonsterWeapon= monsterWeapon[getRNGNumber(monsterWeapon.length)];
    return generatedMonsterWeapon;
}

function generateMonsterDifficulty(): number 
{

    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 10) + 1 zurück.
    let tempMonsterDf: number = 1 + getRNGNumber(20);
    return tempMonsterDf;
}

function generatedImage()
{
    let tempImage: number = getRNGNumber(Images.length);
    return tempImage;
}

function generatedMonsterHealthPoints(): number
{
    let tempMonsterHP: number = 1 + getRNGNumber(10);
    return tempMonsterHP;
}
// Wird für die Erstellung der Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterXP(): number {
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 350) + 100 zurück.
    let tempMonsterXP: number = 100 + getRNGNumber(500);
    return tempMonsterXP;
}
// Wird für die Erstellung der Monster-Modifizierer aufgerufen.
// Liefert ein Array mit zwei Einträgen zurück.
function generateMonsterModifer(): string[]
{
    let tempMonsterMod: string[] = []; // Initialisiere ein leeres Array (verhindert Folge-Fehler)
    tempMonsterMod[0] = monsterModifers[getRNGNumber(monsterModifers.length)]; // Setze Schublade 0 des Arrays auf einen Wert.
    tempMonsterMod[1] = monsterModifers[getRNGNumber(monsterModifers.length)]; // Setze Schublade 1 des Arrays auf einen Wert.
    return tempMonsterMod; // Gebe das hier zusammengesetzte Array wieder zurück.
}
// Aufgerufen, wenn man auf den Button klickt.
// Der Spieler kämpft gegen das entsprechende Monster. Er erhält dann Erfahrungspunkte.
function fightMonster(_index: number) 
{
    console.log("Spieler kämpft gegen Monster und gewinnt!"); // Ohne Logik mit if/else ist so etwas wie ein Kampf nicht leicht umzusetzen.
    console.log("Das Monster weigert sich zu verschwinden."); // Wird nächste Stunde erweitert.
    playerXP += monsterArray[_index - 1].monsterExperience; // _index ist in diesem Fall die Länge des Arrays - allerdings zählt der Computer beginnend von null, nicht eins! Deshalb _index-1.
    document.getElementById("monsterHoldingCell").innerHTML = "";
    monsterArray.splice(_index - 1, 1);
    updatePlayerLevel;
    updateHTML();
}
// Aufgerufen, um das HTML-Element, welches das Spieler-Level darstellt, zu erneuern.
function updatePlayerLevel() 
{
    let tempLevel: number = Math.floor(playerXP / playerXPperLevel);// Spieler-Level = XP / XPproLevel

    document.getElementById("xpCounter").innerHTML = "Player-Level: " + tempLevel + " (XP: " + playerXP + " / " + playerXPperLevel + ")"; // Baue den String für die Spieler-Info zusammen
    console.log("Spieler " + playerName + " hat nun Level " + tempLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)"); // Spieler-Level in der Konsole.
}
//# sourceMappingURL= 62-TS-Example.js.map