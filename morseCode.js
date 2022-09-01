const morse = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    " ": "  ",
}

function morseCode (paragraph) {
    const reg = /([A-Z-a-z])/g;
    if (paragraph.includes('.') && paragraph.includes('-')) {
        let arrayParagraph = paragraph.toLowerCase().split(" ");
        for (let i = 0; i < arrayParagraph.length; i++) {
        }
    } else if (reg.exec(paragraph)) {
        let arrayParagraph = paragraph.toLowerCase().split("");
        for (let i = 0; i < arrayParagraph.length; i++) {
            console.log(morse[arrayParagraph[i]])
        }
    }
}

morseCode('.... --- .- ...- -- ..- -. -.. ---')