// First easy approach using js methods
function hammingWeightJS(n: number): number {
    const binaryString = n.toString(2);
    const activeSetsBits = binaryString.split("").sort().join("").split("1")

    return activeSetsBits.length - 1;
};

// Second approach to optimize the solution, calculating each byte and counting when 1 is triggered
function hammingWeight(n: number): number {
    let count: number = 0;
    let nb: number;

    while (n > 0) {
        nb = n % 2;
        n = (n - nb) / 2;
        nb == 1 ? count ++ : '';
    }
    return count;
    
};
