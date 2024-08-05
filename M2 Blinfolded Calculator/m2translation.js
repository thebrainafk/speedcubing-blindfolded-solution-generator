let letter = 1;
let letter_;
let UK=0;AQ=0;MB=0;ED=0;OV=0;GX=0;PJ=0;FL=0;CI=0;WS=0;TN=0;RH=0;
let LL1 = 0 ;LL2 = 0;
let value_;
let value = 0;
let count = 1;
let leer = 0;


 // Entfernen Sie den gespeicherten Schlüssel aus localStorage
    localStorage.removeItem('letters');
    // Alternativ: localStorage.clear(); // Dies würde ALLE gespeicherten Schlüssel und Werte löschen
    // Aktualisieren Sie die Anzeige
    document.getElementById('savedLetters').innerText = '';





function chooseLetter() {
value_ = value;

if (UK === 0 && U !== 21) 
   { value = U; UK = 1;} else 
if (AQ === 0 && A !== 1) 
   { value = A; AQ = 1; letter = "A"; LL1 = "A"; LL2 = "Q"; } else 
if (CI === 0 && C !== 3) 
   { value = C; CI = 1; letter = "C"; LL1 = "C"; LL2 = "I"; } else 
if (WS === 0 && W !== 23) 
   { value = W; WS = 1; letter = "W"; LL1 = "W"; LL2 = "S"; } else 
if (MB === 0 && M !== 13) 
   { value = M; MB = 1; letter = "M"; LL1 = "M"; LL2 = "B"; } else 
if (ED === 0 && E !== 5) 
   { value = E; ED = 1; letter = "E"; LL1 = "E"; LL2 = "D"; } else 
if (OV === 0 && O !== 15)
   { value = O; OV = 1; letter = "O"; LL1 = "O"; LL2 = "V"; } else 
if (GX === 0 && G !== 7) 
   { value = G; GX = 1; letter = "G"; LL1 = "G"; LL2 = "X"; } else 
if (PJ === 0 && P !== 16) 
   { value = P; PJ = 1; letter = "P"; LL1 = "P"; LL2 = "J"; } else 
if (FL === 0 && F !== 6) 
   { value = F; FL = 1; letter = "F"; LL1 = "F"; LL2 = "L"; } else 
if (TN === 0 && T !== 20) 
   { value = T; TN = 1; letter = "T"; LL1 = "T"; LL2 = "N"; } else 
if (RH === 0 && R !== 18) 
   { value = R; RH = 1; letter = "R"; LL1 = "R"; LL2 = "H"; }

if (value_=== value){
//console.log("value not changed");
writeLetters();
return;}

if (letter !== 1){
saveLetter();}

cycles();
}


function cycles(){

letter = String.fromCharCode(64 + value);



if(value === 21 || value === 11) {
chooseLetter();
return;
}
else{
saveLetter();
}

if (letter === LL1 || letter === LL2) {
chooseLetter(); 
return;}


if (letter === "A") { value = A; }
    else if (letter === "B") { value = B; }
    else if (letter === "C") { value = C; }
    else if (letter === "D") { value = D; }
    else if (letter === "E") { value = E; }
    else if (letter === "F") { value = F; }
    else if (letter === "G") { value = G; }
    else if (letter === "H") { value = H; }
    else if (letter === "I") { value = I; }
    else if (letter === "J") { value = J; }
    else if (letter === "K") { value = K; }
    else if (letter === "L") { value = L; }
    else if (letter === "M") { value = M; }
    else if (letter === "N") { value = N; }
    else if (letter === "O") { value = O; }
    else if (letter === "P") { value = P; }
    else if (letter === "Q") { value = Q; }
    else if (letter === "R") { value = R; }
    else if (letter === "S") { value = S; }
    else if (letter === "T") { value = T; }
    else if (letter === "U") { value = U; }
    else if (letter === "V") { value = V; }
    else if (letter === "W") { value = W; }
    else if (letter === "X") { value = X; }
    else {console.error(`Undefined value for letter ${letter}`);
        return;
    }

setTimeout(cycles,0);
}


function saveLetter() {
ban();

letter_ = letter;
 
if (count % 2 === 0 && letter === "C") { letter_ = "C(W)"; }
if (count % 2 === 0 && letter === "I") { letter_ = "I(S)"; }
if (count % 2 === 0 && letter === "W") { letter_ = "W(C)"; }
if (count % 2 === 0 && letter === "S") { letter_ = "S(I)"; }

// Holen Sie den aktuellen gespeicherten String aus localStorage
let storedLetters = localStorage.getItem('letters') || '';

// Fügen Sie den aktuellen Wert von "letter" hinzu
storedLetters += letter_;

// Wenn count ungerade ist, fügen Sie ein Leerzeichen hinzu
if (leer % 2 !== 0) {
    storedLetters += ' ';}

// Speichern Sie den neuen String zurück in localStorage
localStorage.setItem('letters', storedLetters);

count++;
leer++; 
}


function ban(){

    if (letter === "U" || letter === "K") { UK = 1; }
    if (letter === "A" || letter === "Q") { AQ = 1; }
    if (letter === "M" || letter === "B") { MB = 1; }
    if (letter === "E" || letter === "D") { ED = 1; }
    if (letter === "O" || letter === "V") { OV = 1; }
    if (letter === "G" || letter === "X") { GX = 1; }
    if (letter === "P" || letter === "J") { PJ = 1; }
    if (letter === "F" || letter === "L") { FL = 1; }
    if (letter === "C" || letter === "I") { CI = 1; }
    if (letter === "W" || letter === "S") { WS = 1; }
    if (letter === "T" || letter === "N") { TN = 1; }
    if (letter === "R" || letter === "H") { RH = 1; }
}

function writeLetters(){
//console.log("writeLetters");
 
// Holen Sie die gespeicherten Werte aus localStorage
let storedLetters = localStorage.getItem('letters') || '';
// Anzeigen der gespeicherten Werte auf der Seite
document.getElementById('savedLetters').innerText = storedLetters;
}





