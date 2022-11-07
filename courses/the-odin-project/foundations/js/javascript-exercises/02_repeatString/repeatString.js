const repeatString = function (inputWord, inputTimes) {
    Math.round(inputTimes);
    if (inputTimes < 0)
        return "ERROR";
    let string = "";
    for (n = 0; n < inputTimes; n++)
        string += inputWord;
    return string;
};

// Do not edit below this line
module.exports = repeatString;
