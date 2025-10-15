var hasPathSum = function(root, targetSum) {
    if (root === null) return false;
    let nodes = root;
    let stack = [[nodes, nodes.val]];
    while(stack.length > 0) {
        let [node, sum] = stack.pop();

        if (node.left === null && node.right === null && sum === targetSum)
            return true;

        if (node.right) {
            stack.push([node.right, sum + node.right.val])
        }

        if (node.left) {
            stack.push([node.left, sum + node.left.val])
        }
    }

    return false;
};