const reverseString = function (inputString) {
    let stringArray = inputString.split("");
    let reversedArray = stringArray.reverse();
    let outputString = reversedArray.join("");
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
