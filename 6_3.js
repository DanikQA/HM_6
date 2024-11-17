function camelCase(str, separator) {
    return str
        .split(separator)
        .map((word, index) => index === 0
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}
console.log(camelCase('hello_world', '_'));