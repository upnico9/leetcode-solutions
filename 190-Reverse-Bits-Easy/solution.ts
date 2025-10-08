// First instinct to resolve this, one, get the binary string, reverse it and the get the result 

function reverseBits(n: number): number {
    let str: string = "";
    let number: number;

    while (n > 0) {
        number = n % 2;
        str = number + str;
        n = (n - number) / 2;
    }

    while (str.length < 32) {
        str = "0" + str;    
    }
    const reversed: string = str.split('').reverse().join('');

    let resultNumber: number = 0;
    for (let i = reversed.length - 1, j = 0 ; i >= 0; i--, j++) {
        let value: number = Number(reversed[i]) * (2 ** j);
        resultNumber = value + resultNumber;
    }

    return resultNumber;
};

// Just after, i realise i didn't need to reverse the string if i take the loop the other way on the string
// This is pretty much the same way
function reverseBitsNoReverse(n: number): number {
    let str: string = "";
    let number: number;

    while (n > 0) {
        number = n % 2;
        str = number + str;
        n = (n - number) / 2;
    }

    while (str.length < 32) {
        str = "0" + str;    
    }

    let resultNumber: number = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        resultNumber = resultNumber + Number(str[i]) * (2 ** i);
    }

    return resultNumber;
};

// Resolving this probleme with javascript methods, way much easier
function reverseBitsJS(n: number): number {
    const strBytes = n.toString(2).padStart(32, '0');
    const reversedString = strBytes.split('').reverse().join('');
    return parseInt(reversedString, 2);
};