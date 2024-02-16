const fibonacci = function(index) {

    const input = Number(index);

    if (input < 0) {
        return 'OOPS';
    } else if (input === 0) {
        return 0;
    }

    let array = [1, 1];

    for (let i = array.length-1; i < input-1; i++) {
        let newValue = array[i] + array[i-1];

        array.push(newValue);
    }

    return array[array.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
