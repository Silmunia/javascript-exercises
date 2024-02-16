const palindromes = function (string) {

    const cleanString = string
        .split(',').join('')
        .split('!').join('')
        .split('.').join('')
        .split(' ').join('')
        .toLowerCase();
    
    const reverseString = cleanString.split('').reverse().join('');

    return cleanString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
