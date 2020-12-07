function init() {
    console.log('Program Initialization');
}

function getSelect () {
    const fromText = document.getElementById('valueIn').value;
    if (fromText !== "") {
        const fromConversion = document.getElementById('selFrom').value;
        const toConversion = document.getElementById('selTo').value;
        getSelection(fromConversion, toConversion, fromText)
    }
}

const elements = {
    selbox: document.querySelector(".selectBoxes"),
    seltot: document.querySelector(".selectTotal"),
    exclude: document.querySelector(".excludeVal"),
    getbtn: document.querySelector(".getBtn"),
};

// program initialization
init();

elements.selbox.addEventListener("change", function () {
    document.getElementById('valueExclude').innerHTML = "";
    document.getElementById('output').innerHTML = "";
})

elements.seltot.addEventListener("change", function () {
    document.getElementById('valueExclude').innerHTML = "";
    document.getElementById('output').innerHTML = "";
})

elements.getbtn.addEventListener("click", function () {
    getAnswer();
})

const getAnswer = () => {

    let out = null;

    const numBoxes = document.getElementById('selBox').value;
    const total = document.getElementById('selTot').value;
    const il = document.getElementById('valueExclude').value;

    if (numBoxes == 2) {
        for(a = 1; a <= 9; a++) {
            if (checkExclude(a, il)) {
                for(b = 1 + a; b <= 9; b++) {
                    if (checkExclude(b, il)) {
                        if (a + b == total) {
                            if (out == null) {
                                out = a + " " + b + "</br>";
                            } else {
                                out += a + " " + b + "</br>";
                            }
                            break;
                        }
                    }
                }
            }
        }
    } else if(numBoxes == 3) {
        for(a = 1; a <= 9; a++) {
            if (checkExclude(a, il)) {
                for(b = a + 1; b <= 9; b++) {
                    if (checkExclude(b, il)) {
                        for(c = b + 1; c <= 9; c++) {
                            if (checkExclude(c, il)) {
                                if ((a != b) && (b != c) && (a != c)) {
                                    if (a + b + c == total) {
                                        if (out == null) {
                                            out = a + " " + b + " " + c + "</br>";
                                        } else {
                                            out += a + " " + b + " " + c + "</br>";
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if(numBoxes == 4) {
        for(a = 1; a <= 9; a++) {
            if (checkExclude(a, il)) {
                for(b = a + 1; b <= 9; b++) {
                    if (checkExclude(b, il)) {
                        for(c = b + 1; c <= 9; c++) {
                            if (checkExclude(c, il)) {
                                for(d = c + 1; d <= 9; d++) {
                                    if (checkExclude(d, il)) {
                                        const sum = a + b + c + d;
                                        if (sum == total) {
                                            if (d > 9) break;
                                            if ((a != b) && (b != c) && (c != d)) {
                                                if (out == null) {
                                                    out = a + " " + b + " " + c + " " + d + "</br>";
                                                } else {
                                                    out += a + " " + b + " " + c + " " + d + "</br>";
                                                }
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if(numBoxes == 5) {
        for(a = 1; a <= boxes; a++) {
            if (checkExclude(a, il)) {
                for(b = a + 1; b <= 9; b++) {
                    if (checkExclude(b, il)) {
                        for(c = b + 1; c <= 9; c++) {
                            if (checkExclude(c, il)) {
                                for(d = c + 1; d <= 9; d++) {
                                    if (checkExclude(d, il)) {
                                        for(e = d + 1; e <= 9; e++) {
                                            if (checkExclude(e, il)) {
                                                const sum = a + b + c + d + e;
                                                if (sum == total) {
                                                    if (e > 9) break;
                                                    if ((a != b) && (b != c) && (c != d) && (d != c)) {
                                                        if (out == null) {
                                                            out = a + " " + b + " " + c + " " + d + " " + e + "</br>";
                                                        } else {
                                                            out += a + " " + b + " " + c + " " + d + " " + e + "</br>";
                                                        }
                                                        break;
                                                    }
                                                } else if (sum > total) break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (a == boxes) break;
        }
    } else if(numBoxes == 6) {
        for(a = 1; a <= boxes; a++) {
            if (checkExclude(a, il)) {
                for(b = a + 1; b <= 9; b++) {
                    if (checkExclude(b, il)) {
                        for(c = b + 1; c <= 9; c++) {
                            if (checkExclude(c, il)) {
                                for(d = c + 1; d <= 9; d++) {
                                    if (checkExclude(d, il)) {
                                        for(e = d + 1; e <= 9; e++) {
                                            if (checkExclude(e, il)) {
                                                for(f = e + 1; f <= 9; f++) {
                                                    if (checkExclude(f, il)) {
                                                        const sum = a + b + c + d + e + f;
                                                        if (sum == total) {
                                                            if (f > 9) break;
                                                            if ((a != b) && (b != c) && (c != d) && (d != e) && (e != f)) {
                                                                if (out == null) {
                                                                    out = a + " " + b + " " + c + " " + d + " " + e + " " + f + "</br>";
                                                                } else {
                                                                    out += a + " " + b + " " + c + " " + d + " " + e + " " + f + "</br>";
                                                                }
                                                                break;
                                                            }
                                                        } else if (sum > total) break;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (a == boxes) break;
        }
    }

    document.getElementById('output').innerHTML = out;
}

const checkExclude = (number, exclude) => {
	// console.log(exclude.length);
    for (i = 0; i < exclude.length; i++) {
        const cval = parseInt(exclude.substring(i, i + 1));
        // console.log(cval);
        if (cval == number) {
            return false;
        }
    }
    
    return true;
}