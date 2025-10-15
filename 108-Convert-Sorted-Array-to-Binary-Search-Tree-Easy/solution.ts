var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null;

    let mid = Math.floor(nums.length / 2);
    const floor = new TreeNode(nums[mid]);

    floor.left = sortedArrayToBST(nums.slice(0, mid))
    floor.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));

    return floor;
};