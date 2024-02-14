const sumAll = function() {

    let start = arguments[0];
    let end = arguments[1];

    if (typeof start !== "number" || typeof end !== "number") {
        return "ERROR";
    }

    if (start < 0 || end < 0) {
        return "ERROR";
    }

    if (start > end) {
        let aux = start;
        start = end;
        end = aux;
    }

    let result = 0;

    for (let i = start; i <= end; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
