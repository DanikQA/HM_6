function doubleLetter (str) {
    return str.split('').map(char => char + char).join('');
}

let inputStr = 'hello';
console.log(doubleLetter(inputStr));