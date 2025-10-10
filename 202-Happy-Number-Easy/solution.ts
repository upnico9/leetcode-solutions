function isHappy(n: number): boolean {
    if (n == 1) return true;

    const trackNumbers = new Set();
    let sum = 0;
    let strArr = n.toString(10).split('');

    while (true) {
        sum = strArr.reduce((accumulator, currentValue) => {
            return accumulator + (Number(currentValue) * Number(currentValue));
        }, 0)

        if (trackNumbers.has(sum))
            return false;
        else
            trackNumbers.add(sum);

        strArr = sum.toString(10).split('');

        if (parseInt(strArr.join('').replaceAll("0", "")) == 1)
            return true;
    }

};