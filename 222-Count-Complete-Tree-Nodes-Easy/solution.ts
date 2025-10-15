/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// Iterative approach, pre order traversal
function countNodes(root: TreeNode | null): number {
    if (!root) return 0;

    let stack = [root];
    let count = 0;

    while (stack.length !== 0) {
        let val = stack.pop()

        count ++;

        if (val.right) stack.push(val.right);
        if (val.left) stack.push(val.left);
    }

    return count;
};


// Recursive approach, same traversal
function countNodes(root: TreeNode | null): number {
    if (!root) return 0;
    return 1 + countNodes(root.right) + countNodes(root.left);
};