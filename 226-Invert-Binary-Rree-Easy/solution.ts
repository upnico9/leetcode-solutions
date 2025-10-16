// Recursive way
function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    const tmp = root.left; 
    root.left = root.right;
    root.right = tmp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};


// Iterrative way with a stack
function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    let stack = [root];

    while (stack.length !== 0) {
        const node = stack.shift()!;

        [node.left, node.right] = [node.right, node.left];

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);

    }

    return root;
};