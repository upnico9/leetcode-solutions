var plusOne = function(digits) {
    let nextDigit = false;
    for (let i = digits.length - 1; i >= 0; i--) {
        let value = digits[i];
        if (value < 9) {
            digits[i] = value + 1;
            nextDigit = false;
            break;
        } else {
            digits[i] = 0;
            nextDigit = true;
        }
    }

    if (nextDigit) {
        return [1, ...digits]
    } else {
        return digits;
    }
};