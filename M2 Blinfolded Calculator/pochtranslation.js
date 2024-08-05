let Letter = 1;
let Letter_;
let ERA=0;VKP=0;JMC=0;TWO=0;GLU=0;BQN=0;DFI=0;SHX=0;
let ll1 = 0 ;ll2 = 0;ll3 = 0;
let Value_;
let Value = 0;
let Leer = 0;


 // Entfernen Sie den gespeicherten Schlüssel aus localStorage
    localStorage.removeItem('Pletters');
    // Alternativ: localStorage.clear(); // Dies würde ALLE gespeicherten Schlüssel und Werte löschen
    // Aktualisieren Sie die Anzeige
    document.getElementById('SavedLetters').innerText = '';



function ChooseLetter() {
Value_ = Value;

if (ERA === 0 && e !== 5)
 { Value = e; ERA = 1; } else 
if (VKP === 0 && v !== 22)
 { Value = v; VKP = 1; Letter = "v"; ll1 = "v"; ll2 = "k"; ll3 = "p"; } else 
if (JMC === 0 && j !== 10)
 { Value = j; JMC = 1; Letter = "j"; ll1 = "j"; ll2 = "m"; ll3 = "c"; } else 
if (TWO === 0 && t !== 20)
 { Value = t; TWO = 1; Letter = "t"; ll1 = "t"; ll2 = "w"; ll3 = "o"; } else 
if (GLU === 0 && g !== 7)
 { Value = g; GLU = 1; Letter = "g"; ll1 = "g"; ll2 = "l"; ll3 = "u"; } else 
if (BQN === 0 && b !== 2)
 { Value = b; BQN = 1; Letter = "b"; ll1 = "b"; ll2 = "q"; ll3 = "n"; } else 
if (DFI === 0 && d !== 4)
 { Value = d; DFI = 1; Letter = "d"; ll1 = "d"; ll2 = "f"; ll3 = "i"; } else 
if (SHX === 0 && s !== 19)
 { Value = s; SHX = 1; Letter = "s"; ll1 = "s"; ll2 = "h"; ll3 = "x"; }

if (Value_=== Value){
//console.log("Value not changed");
WriteLetters();
return;}

if (Letter !== 1){
SaveLetter();}

Cycles();
}


function Cycles(){

Letter = String.fromCharCode(96 + Value);



if(Value === 1 || Value === 5 || Value === 18) {
ChooseLetter();
return;
}
else{
SaveLetter();
}

if (Letter === ll1 || Letter === ll2 || Letter === ll3) {
ChooseLetter(); 
return;}


if (Letter === "a") { Value = a; }
    else if (Letter === "b") { Value = b; }
    else if (Letter === "c") { Value = c; }
    else if (Letter === "d") { Value = d; }
    else if (Letter === "e") { Value = e; }
    else if (Letter === "f") { Value = f; }
    else if (Letter === "g") { Value = g; }
    else if (Letter === "h") { Value = h; }
    else if (Letter === "i") { Value = i; }
    else if (Letter === "j") { Value = j; }
    else if (Letter === "k") { Value = k; }
    else if (Letter === "l") { Value = l; }
    else if (Letter === "m") { Value = m; }
    else if (Letter === "n") { Value = n; }
    else if (Letter === "o") { Value = o; }
    else if (Letter === "p") { Value = p; }
    else if (Letter === "q") { Value = q; }
    else if (Letter === "r") { Value = r; }
    else if (Letter === "s") { Value = s; }
    else if (Letter === "t") { Value = t; }
    else if (Letter === "u") { Value = u; }
    else if (Letter === "v") { Value = v; }
    else if (Letter === "w") { Value = w; }
    else if (Letter === "x") { Value = x; }
    else {console.error(`Undefined value for letter ${Letter}`);
        return;
    }

setTimeout(Cycles,0);
}


function SaveLetter() {
Ban();
 
// Holen Sie den aktuellen gespeicherten String aus localStorage
let StoredLetters = localStorage.getItem('Pletters') || '';

// Fügen Sie den aktuellen Wert von "letter" hinzu
StoredLetters += Letter;

// Wenn count ungerade ist, fügen Sie ein Leerzeichen hinzu
if (Leer % 2 !== 0) {
    StoredLetters += ' ';}

// Speichern Sie den neuen String zurück in localStorage
localStorage.setItem('Pletters', StoredLetters);

Leer++; 
}


function Ban(){

if(Letter==="e" || Letter==="r" || Letter==="a") {
    ERA = 1;
}
if(Letter==="v" || Letter==="k" || Letter==="p") {
    VKP = 1;
}
if(Letter==="j" || Letter==="m" || Letter==="c") {
    JMC = 1;
}
if(Letter==="t" || Letter==="w" || Letter==="o") {
    TWO = 1;
}
if(Letter==="g" || Letter==="l" || Letter==="u") {
    GLU = 1;
}
if(Letter==="b" || Letter==="q" || Letter==="n") {
    BQN = 1;
}
if(Letter==="d" || Letter==="f" || Letter==="i") {
    DFI = 1;
}
if(Letter==="s" || Letter==="h" || Letter==="x") {
    SHX = 1;
}

}

function WriteLetters(){
//console.log("WriteLetters");

if (Leer % 2 !== 0) {A = 4; D = 1; Q = 5; E = 17;};
if (typeof processInput === "function") {
        processInput();}

// Holen Sie die gespeicherten Werte aus localStorage
let StoredLetters = localStorage.getItem('Pletters') || '';
// Anzeigen der gespeicherten Werte auf der Seite
document.getElementById('SavedLetters').innerText = StoredLetters;
}





