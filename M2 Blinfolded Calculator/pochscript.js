// Initialisierung der Variablen
let a = 1, b = 2, c = 3, d = 4, e = 5, f = 6, g = 7, h = 8, i = 9, j = 10, k = 11, l = 12, m = 13, n = 14, o = 15, p = 16, q = 17, r = 18, s = 19, t = 20, u = 21, v = 22, w = 23, x = 24;
let a_, b_, c_, d_, e_, f_, g_, h_, i_, j_, k_, l_, m_, n_, o_, p_, q_, r_, s_, t_, u_, v_, w_, x_;

function Initialize() {
   a_ = a;b_ = b;c_ = c;d_ = d;e_ = e;f_ = f;g_ = g;h_ = h;i_ = i;j_ = j;k_ = k;l_ = l;
   m_ = m;n_ = n;o_ = o;p_ = p;q_ = q;r_ = r;s_ = s;t_ = t;u_ = u;v_ = v;w_ = w;x_ = x;

}

function ApplyRules(char) {
    switch (char) {
        case 'R':
            c = k_; b = j_; q = c_; t = b_; w = q_; v = t_; k = w_; j = v_; m = p_; n = m_; o = n_; p = o_ ;
            break;
        case 'L':
            a = s_; d = r_; i = a_; l = d_; u = i_; x = l_; s = u_; r = x_; e = h_; f = e_; g = f_; h = g_ ;
            break;
        case 'F':
            d = g_; c = f_; m = d_; p = c_; v = m_; u = p_; g = v_; f = u_; i = l_; j = i_; k = j_; l = k_ ;
            break;
        case 'B':
            b = o_; a = n_; e = b_; h = a_; x = e_; w = h_; o = x_; n = w_; q = t_; r = q_; s = r_; t = s_ ;
            break;
        case 'U':
            r = f_; q = e_; n = r_; m = q_; j = n_; i = m_; f = j_; e = i_; a = d_; b = a_; c = b_; d = c_ ;
            break;
        case 'D':
            l = h_; k = g_; p = l_; o = k_; t = p_; s = o_; h = t_; g = s_; u = x_; v = u_; w = v_; x = w_ ;
            break;
        case "R'":
            c = q_; b = t_; q = w_; t = v_; w = k_; v = j_; k = c_; j = b_; m = n_; n = o_; o = p_; p = m_ ;
            break;
        case "L'":
            a = i_; d = l_; i = u_; l = x_; u = s_; x = r_; s = a_; r = d_; e = f_; f = g_; g = h_; h = e_ ;
            break;
        case "F'":
            d = m_; c = p_; m = v_; p = u_; v = g_; u = f_; g = d_; f = c_; i = j_; j = k_; k = l_; l = i_ ;
            break;
        case "B'":
            b = e_; a = h_; e = x_; h = w_; x = o_; w = n_; o = b_; n = a_; q = r_; r = s_; s = t_; t = q_ ;
            break;
        case "U'":
            r = n_; q = m_; n = j_; m = i_; j = f_; i = e_; f = r_; e = q_; a = b_; b = c_; c = d_; d = a_ ;
            break;
        case "D'":
            l = p_; k = o_; p = t_; o = s_; t = h_; s = g_; h = l_; g = k_; u = v_; v = w_; w = x_; x = u_ ;
            break;
        default:
            console.log(`poch Keine Regel für den Buchstaben: ${char}`);
            break;
    }
}

function ProcessInput() {
    Initialize();  // Startwerte kopieren
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
        ApplyRules(char);
        Initialize();  // Werte nach jeder Änderung kopieren
        i++;
    }
   if (typeof ChooseLetter === "function") {
        ChooseLetter();}

    DisplayOutput();
    // if (typeof chooseLetter === "function") {
     //   chooseLetter();}
}

function DisplayOutput() {
    const Output = `
        a = ${a}, b = ${b}, c = ${c}, d = ${d}, e = ${e}, f = ${f}, g = ${g}, h = ${h}, i = ${i}, j = ${j},
        k = ${k}, l = ${l}, m = ${m}, n = ${n}, o = ${o}, p = ${p}, q = ${q}, r = ${r}, s = ${s}, t = ${t},
        u = ${u}, v = ${v}, w = ${w}, x = ${x}
    `;
    //document.getElementById('Output').innerText = Output;
} 
