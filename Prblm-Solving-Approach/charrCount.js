/**** Count characters in a String using function ****/
function charCount(str) {
    let charList = {};

    for (let i = 0; i < str.length; i++) {
        const element = str[i].toLowerCase();
        if (charList[element] > 0) {
            charList[element]++;
        }
        else {
            charList[element] = 1;
        }
    }
    return charList;
}
console.log(charCount("Feni Computer Institute".replace(/\s/g, "")));