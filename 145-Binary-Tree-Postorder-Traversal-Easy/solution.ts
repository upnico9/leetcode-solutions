var postorderTraversal = function(root) {
    if (!root) return [];

    const responses = [];
    const stack = [];

    stack.push(root)    
    while (stack.length !== 0) {
        const values = stack.pop()
        responses.push(values.val)
        if (values.left) stack.push(values.left)
        if (values.right) stack.push(values.right)

    }

    return responses.reverse();
    
};