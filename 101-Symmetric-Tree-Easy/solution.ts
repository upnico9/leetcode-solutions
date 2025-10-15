var isSymmetric = function(root) {
    const stack = [[root.left, root.right]]

    while (stack.length != 0) {
        let [nodeA, nodeB] = stack.pop()
        if (nodeA === null && nodeB === null)
            continue
        if (nodeA === null || nodeB === null)
            return false;
        if (nodeA.val !== nodeB.val)
            return false

        stack.push([nodeA.left, nodeB.right])
        stack.push([nodeA.right, nodeB.left])
    }

    return true;
};
