const removeFromArray = function (...input) {
    let array = input[0];
    const outputArray = [];
    array.forEach((i) => {
        if (!input.includes(i)) {
            outputArray.push(i);
        }
    })
    return outputArray
};

// Do not edit below this line
module.exports = removeFromArray;
