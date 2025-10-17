function summaryRanges(nums: number[]): string[] {
    if (nums.length === 0) return [];
    const arrStorage = [];

    let tmpArray = [nums[0]];
    let lastValue = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - lastValue !== 1) {
            arrStorage.push(tmpArray)
            tmpArray = []
            tmpArray.push(nums[i]);
        } else {
            tmpArray.push(nums[i]);
        }
        lastValue = nums[i];
    }

    if (tmpArray.length > 0)
        arrStorage.push(tmpArray);

    return arrStorage.map((arr) => {
        if (arr.length === 1) return arr.toString(10);
        else return [arr[0], arr[arr.length - 1]].join('->')
    })
};