var addBinary = function(a, b) {
    const aNumber = BigInt("0b" + a);
    const bNumber = BigInt("0b" + b);

    return (aNumber + bNumber).toString(2);
};