const removeFromArray = function() {
    let result = [];

    for (let i = 0; i < arguments[0].length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            if (arguments[0][i] === arguments[j]) {
                break;
            } else if (j === arguments.length-1) {
                result.push(arguments[0][i]);
            }
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
