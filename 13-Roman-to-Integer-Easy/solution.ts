function romanToInt(s: string): number {
    let myMap = new Map<string, number>([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    let count = 0;
    let lastValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        let value = myMap.get(s[i]);
        if (value >= lastValue) {
            count = count + value;
        } else {
            count = count - value;
        }
        lastValue = value;
    }
    return count;
};