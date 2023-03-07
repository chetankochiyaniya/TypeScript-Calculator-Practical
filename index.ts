let keys : string[]= ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '%', '^', '(', ')', '.'];
let d = document.getElementById("d") as HTMLInputElement
document.addEventListener('keydown', (event):void => {
    let k = event.key;
    if (k == 'Delete') {
        clear_val();
    }
    if (k == 'Backspace') {
        back();
    }
    if (k == 'Enter' || k == '=') {
        if (d.value)
            equal();
    }
    if (keys.includes(k)) {
        d.value += k;
    }
    validate()
});

document.addEventListener("click", () : void => {
    validate()
})


function elem(val:string):void {
    if (d.value == "invalid input") {
        d.value = val
    }
    else {
        d.value += val;
    }
}

function equal():void {
    if ((d.value).includes("^")) {
        d.value = (d.value).replace("^", "**")
    }
    if (d.value.includes("ylog")) {
        let z : number = (d.value).search("ylog");
        let y : number = parseInt((d.value).substring(0, z));
        let x : number = parseInt((d.value).substring(z + 4, (d.value).length));
        d.value = (Math.log(x) / Math.log(y)).toString();

    }
    d.value = eval(d.value)
}

function clear_val() : void{
    d.value = " ";
}

function back() : void {
    const val = d.value;
    d.value = val.substr(0, val.length - 1);
}

function getFact(n : number): string | number {
    let result : number = 1;
    if (n > 1) {
        for (let i = 1; i <= n; i++) {
            result = result * i;
        }
        return result;
    }
    else {
        return "num should be positive";
    }
}

function fact() : void {
    d.value = getFact(parseInt(d.value)).toString();
}

function validate() : void {
    if (d.value == "NaN" || d.value == "-Infinity") {
        d.value = "invalid input"
    }
}

function inverseSign() {
    d.value = (-1 * parseFloat(d.value)).toString();
}

function exp_func() {
    d.value = Math.exp(parseInt(d.value)).toString();
}

function abs_val() {
    d.value = (Math.abs(parseFloat(d.value))).toString()
}
function div_by_one() {
    d.value = (1 / (parseFloat(d.value))).toString();
}

function square() {
    d.value = (parseInt(d.value)* parseInt(d.value)).toString();
}

function square_root() {
    d.value = (Math.sqrt(parseInt(d.value))).toString();
}

function x_pow_y() {
    d.value = d.value + "^";
}

function ten_pow_x() {
    d.value = (Math.pow(10, parseInt(d.value))).toString()
}

function logarithm(base) {
    if (base == "ten") {
        d.value = (Math.log10(parseFloat(d.value))).toString()
    }
    else {
        d.value = (Math.log(parseFloat(d.value))).toString()
    }

}

function euler_num() {
    d.value = (Math.E).toString()
}

function pi_val() {
    d.value = (Math.PI).toString()
}

let z = 1;
function radian() {
    if (z == 1) {
        document.getElementById('degree')!.innerHTML = "RAD";
        z = 0;
    }
    else {
        document.getElementById('degree')!.innerHTML = "DEG";
        z = 1;
    }
}

function trigo(t) {
    switch (t) {
        case "sin":
            if (z == 1) {
                d.value = (Math.sin((Math.PI / 180) * Number(d.value))).toFixed(5);
            }
            else {
                d.value = (Math.sin(parseFloat(d.value))).toFixed(5);
            }
            break;
        case "cos":
            if (z) {
                d.value = (Math.cos(Math.PI / 180 * parseFloat(d.value))).toString();
            }
            else {
                d.value = (Math.cos(parseFloat(d.value))).toString();
            }
            break;
        case "tan":
            if (z) {
                d.value = ((Math.tan(Math.PI / 180 * parseFloat(d.value)))).toString();
            }
            else {
                d.value = (Math.tan(parseFloat(d.value))).toString();
            }
            break;
        case "sec":
            if (z) {
                d.value = ((1 / Math.cos(Math.PI / 180 * parseFloat(d.value)))).toString();
            }
            else {
                d.value = (1 / Math.cos(parseFloat(d.value))).toString();
            }
            break;
        case "csc":
            if (z) {
                d.value = ((1 / Math.sin(Math.PI / 180 * parseFloat(d.value)))).toString();
            }
            else {
                d.value = (1 / Math.sin(parseFloat(d.value))).toString();
            }
            break;
        case "cot":
            if (z) {
                d.value = (1 / (Math.tan(Math.PI / 180 * parseFloat(d.value)))).toString();
            }
            else {
                d.value = (1 / Math.tan(parseFloat(d.value))).toString();
            }
            break;
        case "asin":
            if (z) {
                d.value = ((180 / Math.PI * Math.asin(parseFloat(d.value)))).toString();
            }
            else {
                d.value = (Math.asin(parseFloat(d.value))).toString();
            }
            break;
        case "acos":
            if (z) {
                d.value = ((180 / Math.PI * Math.acos(parseFloat(d.value)))).toString();
            }
            else {
                d.value = (Math.acos(parseFloat(d.value))).toString();
            }
            break;
        case "atan":
            if (z) {
                d.value = ((180 / Math.PI * Math.atan(parseFloat(d.value)))).toString();
            }
            else {
                d.value = (Math.atan(parseFloat(d.value))).toString();
            }
            break;
        case "asec":
            if (z) {
                d.value = ((180 / Math.PI * (Math.acos(1 / parseFloat(d.value))))).toString();
            }
            else {
                d.value = (1 / Math.acos(parseFloat(d.value))).toString();
            }
            break;
        case "acsc":
            if (z) {
                d.value = ((180 / Math.PI * (Math.asin(1 / parseFloat(d.value))))).toString();
            }
            else {
                d.value = (1 / Math.asin(parseFloat(d.value))).toString();
            }
            break;
        case "acot":
            if (z) {
                d.value = ((180 / Math.PI * (Math.atan(1 / parseFloat(d.value))))).toString();
            }
            else {
                d.value = (1 / Math.atan(parseFloat(d.value))).toString();
            }
            break;
        case "sinh":
            d.value = (Math.sinh(parseFloat(d.value))).toString()
            break;
        case "cosh":
            d.value = (Math.cosh(parseFloat(d.value))).toString()
            break;
        case "tanh":
            d.value = (Math.tanh(parseFloat(d.value))).toString()
            break;
        case "sech":
            d.value = (1 / Math.cosh(parseFloat(d.value))).toString()
            break;
        case "csch":
            d.value = (1 / Math.sinh(parseFloat(d.value))).toString()
            break;
        case "coth":
            d.value = (1 / Math.tanh(parseFloat(d.value))).toString()
            break;
        case "asinh":
            d.value = (Math.asinh(parseFloat(d.value))).toString();
            break;
        case "acosh":
            d.value = (Math.acosh(parseFloat(d.value))).toString()
            break;
        case "atanh":
            d.value = (Math.atanh(parseFloat(d.value))).toString()
            break;
        case "asech":
            d.value = (1 / Math.acosh(parseFloat(d.value))).toString()
            break;
        case "acsch":
            d.value = (1 / Math.asinh(parseFloat(d.value))).toString()
            break;
        case "acoth":
            d.value = (1 / Math.atanh(parseFloat(d.value))).toString()
            break;
    }
}

function floor() {
    d.value = (Math.floor(parseFloat(d.value))).toString();
}

function ceil() {
    d.value = (Math.ceil(parseFloat(d.value))).toString();
}

function rand() {
    d.value = (Math.random()).toString();
}

function dms() {
    let dms : number = parseFloat(d.value);
    let deg : number = dms;
    let sec = ((dms as any).toFixed(4) - (dms as any).toFixed(2)) * 10000;
    let min = ((dms as any).toFixed(2) - deg) * 100;
    deg = deg + min / 60 + sec / 3600;
    d.value = deg.toFixed(2).toString();
}

function deg() {
    let deg : number = parseInt(d.value);
    let minutes : number = (deg - deg) * 60;
    let seconds : number = (minutes - minutes) * 60;
    d.value = parseFloat(`${deg}.${minutes}${seconds}`).toFixed(4).toString();
}

function cube() {
    d.value = (Math.pow(parseInt(d.value), 3)).toString();
}

function cube_root() {
    d.value = (Math.pow(parseInt(d.value), 1 / 3)).toString();
}

function x_pow_four() {
    d.value = (Math.pow(parseInt(d.value), 4)).toString();
}

function two_pow_x() {
    d.value = (Math.pow(2, parseInt(d.value))).toString();
}

function e_pow_x() {
    d.value = (Math.exp(parseInt(d.value))).toString();
}

let f = 1;
function change_btn() {
    if (f) {
        for (let element of document.getElementsByClassName('btn1-show')) {
            (element as HTMLButtonElement).style.display = "none";
        }
        for (let element of document.getElementsByClassName('btn2-show')) {
            (element as HTMLButtonElement).style.display = "inline-block";
        }
        f = 0;
    }
    else {
        for (let element of document.getElementsByClassName('btn2-show')) {
            (element as HTMLButtonElement).style.display = "none";
        }
        for (let element of document.getElementsByClassName('btn1-show')) {
            (element as HTMLButtonElement).style.display = "inline-block";
        }
        f = 1;
    }
}

let k = 1;
function change_btn_color(agr) {
    if (k == 1) {
        document.getElementById("change_btn")!.style.backgroundColor = "rgb(0, 153, 255)"
        k = 0;
    }
    else {
        document.getElementById("change_btn")!.style.backgroundColor = "rgb(0, 0, 0)";
        k = 1;
    }
}

let memory:string[] = [];
function m_store() {
    enb_btn();
    memory.push(d.value);
    d.value = " ";
}

function enb_btn() {
    (document.getElementById('mc') as HTMLButtonElement).disabled = false;
    (document.getElementById('mr') as HTMLButtonElement).disabled = false;
}

function m_clear() {
    memory = [];
    d.value = " ";
    (document.getElementById('mc') as HTMLButtonElement).disabled = true;
    (document.getElementById('mr') as HTMLButtonElement).disabled = true;
}

function m_read() {
    d.value = memory[memory.length - 1].toString();
}

function m_plus() {
    if (memory.length == 0) {
        memory.push(d.value);
    }
    else {
        memory[memory.length - 1] += parseFloat(d.value);
    }

}

function m_minus() {
    if (memory.length == 0) {
        memory.push((-1 * parseFloat(d.value)).toString());
    }
    else {
      memory[memory.length - 1] = (parseInt(memory[memory.length - 1]) - parseInt(d.value)).toString();
    }
}

let c = 1;
function change_color() {
    if (c == 1) {
        document.getElementById("degree")!.style.backgroundColor = "rgb(0, 153, 255)"
        c = 0;
    }
    else {
        document.getElementById("degree")!.style.backgroundColor = "rgb(0, 0, 0)";
        c = 1;
    }
}

let w = 1
function fe_func() {
    if (w) {
        d.value = Number(d.value).toString();
        w = 0;
    }
    else {
        d.value = Number(d.value).toExponential().toString();
        w = 1;
    }
}
