const sumAll = function (firstNumber, secondNumber) {
    let outputNumber = 0;
    let start;
    let end;

    if (firstNumber < 0 || secondNumber < 0)
        return "ERROR"

    if (typeof (firstNumber, secondNumber) !== "number" || typeof (firstNumber, secondNumber) === NaN)
        return "ERROR"

    if (firstNumber < secondNumber) {
        start = firstNumber;
        end = secondNumber
    }
    else {
        start = secondNumber;
        end = firstNumber;
    }

    for (let i = start; i <= end; i++)
        outputNumber += i;
    return outputNumber;

};

// Do not edit below this line
module.exports = sumAll;
