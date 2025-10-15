var isSameTree = function(p, q) {

    const stack = [[p, q]];

    while (stack.length !== 0) {
        const [nodeA, nodeB] = stack.pop();

        if (nodeA === null && nodeB === null)
            continue;

        if (nodeA === null || nodeB === null)
            return false;

        if (nodeA.val !== nodeB.val)
            return false;
        
        stack.push([nodeA.right, nodeB.right]);
        stack.push([nodeA.left, nodeB.left])
    }

    return true;
};