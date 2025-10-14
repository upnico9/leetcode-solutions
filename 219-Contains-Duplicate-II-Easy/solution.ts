function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const numberMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i ++) {
        let value = numberMap.get(nums[i]);
        
        if (Math.abs(value - i) <= k)
            return true;
        
        numberMap.set(nums[i], i);     
    }
    return false;
};