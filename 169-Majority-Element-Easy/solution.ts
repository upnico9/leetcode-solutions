// First instinctive solution to solve this problem
function majorityElement(nums: number[]): number {
    const sorted = nums.sort();
    return nums[Math.floor(sorted.length / 2)]
};

// However, the subjects tell us we can solve this problem in a O(1) space
// Solutions is to implement the Boyer Moore voting algorithm

function majorityElementBoyer(nums: number[]): number {
    let candidate = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i ++) {
        if (count === 0) {
            candidate = nums[i];
        }

        if (nums[i] === candidate)
            count++;
        else
            count--;
    }
    return candidate;
};