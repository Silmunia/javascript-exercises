const findTheOldest = function(array) {
    return array.reduce((acc, item) => {
        let accAge = (acc['yearOfDeath'] ? acc['yearOfDeath'] : new Date().getFullYear()) - acc['yearOfBirth']

        let itemAge = (item['yearOfDeath'] ? item['yearOfDeath'] : new Date().getFullYear()) - item['yearOfBirth']

        if (itemAge > accAge) {
            acc = item;
        }

        return acc;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
