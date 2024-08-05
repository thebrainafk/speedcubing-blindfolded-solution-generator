// Initialisierung der Variablen
let A = 1, B = 2, C = 3, D = 4, E = 5, F = 6, G = 7, H = 8, I = 9, J = 10, K = 11, L = 12, M = 13, N = 14, O = 15, P = 16, Q = 17, R = 18, S = 19, T = 20, U = 21, V = 22, W = 23, X = 24;
let A_, B_, C_, D_, E_, F_, G_, H_, I_, J_, K_, L_, M_, N_, O_, P_, Q_, R_, S_, T_, U_, V_, W_, X_;

function initialize() {
    A_ = A; B_ = B; C_ = C; D_ = D; E_ = E; F_ = F; G_ = G; H_ = H; I_ = I; J_ = J; K_ = K; L_ = L;
    M_ = M; N_ = N; O_ = O; P_ = P; Q_ = Q; R_ = R; S_ = S; T_ = T; U_ = U; V_ = V; W_ = W; X_ = X;
}

function applyRules(char) {
    switch (char) {
        case 'R':
            B = J_; T = B_; V = T_; J = V_; M = P_; N = M_; O = N_; P = O_;
            break;
        case 'L':
            D = R_; L = D_; X = L_; R = X_; E = H_; F = E_; G = F_; H = G_;
            break;
        case 'F':
            C = F_; P = C_; U = P_; F = U_; I = L_; J = I_; K = J_; L = K_;
            break;
        case 'B':
            A = N_; H = A_; W = H_; N = W_; Q = T_; R = Q_; S = R_; T = S_;
            break;
        case 'U':
            Q = E_; M = Q_; I = M_; E = I_; A = D_; B = A_; C = B_; D = C_;
            break;
        case 'D':
            K = G_; O = K_; S = O_; G = S_; U = X_; V = U_; W = V_; X = W_;
            break;
        case "R'":
            B = T_; T = V_; V = J_; J = B_; M = N_; N = O_; O = P_; P = M_;
            break;
        case "L'":
            D = L_; L = X_; X = R_; R = D_; E = F_; F = G_; G = H_; H = E_;
            break;
        case "F'":
            C = P_; P = U_; U = F_; F = C_; I = J_; J = K_; K = L_; L = I_;
            break;
        case "B'":
            A = H_; H = W_; W = N_; N = A_; Q = R_; R = S_; S = T_; T = Q_;
            break;
        case "U'":
            Q = M_; M = I_; I = E_; E = Q_; A = B_; B = C_; C = D_; D = A_;
            break;
        case "D'":
            K = O_; O = S_; S = G_; G = K_; U = V_; V = W_; W = X_; X = U_;
            break;
        default:
            console.log(`Keine Regel für den Buchstaben: ${char}`);
            break;
    }
}

function processInput() {
    initialize();  // Startwerte kopieren
    const input = document.getElementById('inputField').value.toUpperCase();

    let i = 0;
    while (i < input.length) {
        let char = input[i];
        if (char === '2') {
            if (i > 0) {
                char = input[i - 1]; // Nimmt den vorherigen Buchstaben
            } else {
                i++;
                continue; // Ignoriert die 2, wenn sie am Anfang steht
            }
        } else if (char === 'R' || char === 'L' || char === 'F' || char === 'B' || char === 'U' || char === 'D') {
            if (i + 1 < input.length && input[i + 1] === "'") {
                char += "'";
                i++;
            }
        }
        applyRules(char);
        initialize();  // Werte nach jeder Änderung kopieren
        i++;
    }


if (typeof chooseLetter === "function") {
        chooseLetter();}

    displayOutput();
     }

function displayOutput() {
    const output = `
        A = ${A}, B = ${B}, C = ${C}, D = ${D}, E = ${E}, F = ${F}, G = ${G}, H = ${H}, I = ${I}, J = ${J},
        K = ${K}, L = ${L}, M = ${M}, N = ${N}, O = ${O}, P = ${P}, Q = ${Q}, R = ${R}, S = ${S}, T = ${T},
        U = ${U}, V = ${V}, W = ${W}, X = ${X}
    `;
    //document.getElementById('output').innerText = output;
}
