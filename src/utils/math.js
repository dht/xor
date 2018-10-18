export const dec2bit = dec => {
    let output = dec.toString(2);
    output = min(output);
    return output.split("").map(zo => zo === "1");
};

export const arr2bit = arr => arr.map(tf => (tf ? "1" : "0")).join("");

export const bit2dec = arr => {
    const bit = arr2bit(arr);
    return parseInt(bit, 2).toString(10);
};

export const min = (num, size = 4) => {
    let output = String(num || 0);
    while (output.length < size) {
        output = "0" + output;
    }
    return output;
};

export const and = (p, q) => {
    const p_bit = dec2bit(p);
    const q_bit = dec2bit(q);
    let output = [];

    for (let cnt = 0; cnt < p_bit.length; cnt++) {
        output[cnt] = p_bit[cnt] && q_bit[cnt];
    }

    const dec = bit2dec(output);

    return dec;
};

export const or = (p, q) => {
    const p_bit = dec2bit(p);
    const q_bit = dec2bit(q);
    let output = [];

    for (let cnt = 0; cnt < p_bit.length; cnt++) {
        output[cnt] = p_bit[cnt] || q_bit[cnt];
    }

    const dec = bit2dec(output);

    return dec;
};

export const _if = (p, q) => {
    const p_bit = dec2bit(p);
    const q_bit = dec2bit(q);
    let output = [];

    for (let cnt = 0; cnt < p_bit.length; cnt++) {
        output[cnt] = !(p_bit[cnt] && !q_bit[cnt]);
    }

    const dec = bit2dec(output);

    return dec;
};

// xnor
export const _ifonly = (p, q) => {
    const p_bit = dec2bit(p);
    const q_bit = dec2bit(q);
    let output = [];

    for (let cnt = 0; cnt < p_bit.length; cnt++) {
        output[cnt] = p_bit[cnt] == q_bit[cnt];
    }

    const dec = bit2dec(output);

    return dec;
};

export const xor = (p, q) => {
    const p_bit = dec2bit(p);
    const q_bit = dec2bit(q);
    let output = [];

    for (let cnt = 0; cnt < p_bit.length; cnt++) {
        output[cnt] = p_bit[cnt] != q_bit[cnt];
    }

    const dec = bit2dec(output);

    return dec;
};

export const nand = (p, q) => {
    const p_bit = dec2bit(p);
    const q_bit = dec2bit(q);
    let output = [];

    for (let cnt = 0; cnt < p_bit.length; cnt++) {
        output[cnt] = !p_bit[cnt] || !q_bit[cnt];
    }

    const dec = bit2dec(output);

    return dec;
};

export const nor = (p, q) => {
    const p_bit = dec2bit(p);
    const q_bit = dec2bit(q);
    let output = [];

    for (let cnt = 0; cnt < p_bit.length; cnt++) {
        output[cnt] = !p_bit[cnt] && !q_bit[cnt];
    }

    const dec = bit2dec(output);

    return dec;
};

export const eight = (p, q) => {
    const p_bit = dec2bit(p);
    const q_bit = dec2bit(q);
    let output = [];

    for (let cnt = 0; cnt < p_bit.length; cnt++) {
        output[cnt] = p_bit[cnt] || !q_bit[cnt];
    }

    const dec = bit2dec(output);

    return dec;
};

const parse = (p, q, method) => {
    // if (p === 8 && q === 7 && method === "or") {
    //     debugger;
    // }

    switch (method) {
        case "and":
            return and(p, q);
        case "or":
            return or(p, q);
        case "if":
            return _if(p, q);
        case "ifonly":
            return _ifonly(p, q);
        case "xor":
            return xor(p, q);
        case "nand":
            return nand(p, q);
        case "nor":
            return nor(p, q);
        case "eight":
            return eight(p, q);
        default:
            return "-";
    }
};

export const generateMap = method => {
    let output = [];

    for (let q = 0; q <= 15; q++) {
        let rows = [];
        for (let p = 1; p <= 15; p++) {
            if (q === 0) {
                rows.push(p);
            } else {
                rows.push(parse(p, q, method));
            }
        }
        output.push({ header: q, rows });
    }

    return output;
};
