function padString(str, length, symbol, toLeft = false) {
    if (length <= str.length) {
        return str;
    }
    return toLeft
        ? str.padStart(length, symbol)
        : str.padEnd(length, symbol); 
}
console.log(padString('Ivan', 6, '*')); 
