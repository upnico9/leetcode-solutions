function isValid(s: string): boolean {
    const stackOpen = [];

    const mappingBracket = new Map<string, string>([
        ['(', ')'],
        ['[', ']'],
        ['{', '}'],
    ])

    for (let i = 0; i < s.length; i++) {
        if (mappingBracket.get(s[i])) {
            stackOpen.push(s[i]);
        } else {
            const openingValue = stackOpen.pop();
            const check = mappingBracket.get(openingValue);

            if (check !== s[i])
                return false;
        }
    }

    if (stackOpen.length !== 0) return false;
    return true;
};