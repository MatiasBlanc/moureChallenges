// const reverseString = p => console.log(p.split('').reverse().join(''))

function reverseString(paragraph) {
    let arrParagraph = paragraph.split("");
    let arrReverse = [];

    for (let i = arrParagraph.length; i >= 0; --i) {
        arrReverse.push(arrParagraph[i]);
    }

    console.log(arrReverse.join(''))
}

reverseString('Hello World');