function isAnagram(word1, word2) {
    let word1ArraySorted = word1.split('').sort();
    let word2ArraySorted = word2.split('').sort();

    let word1StringSorted = word1ArraySorted.join('');
    let word2StringSorted = word2ArraySorted.join('');

    console.log(word1StringSorted === word2StringSorted);
}

isAnagram('roma', 'amor');