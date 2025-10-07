function titleToNumber(columnTitle: string): number {
    const baseASCIINumber = 64;
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        let letter = columnTitle[columnTitle.length - (i + 1)]
        const value = letter.charCodeAt(0) - baseASCIINumber;
        const valueToAdd = value * (26 ** i)
        result += valueToAdd;
    }
    return result;
};