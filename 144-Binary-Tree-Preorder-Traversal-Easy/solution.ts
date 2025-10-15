var preorderTraversal = function(root) {
    if (!root) return []
    const outputArray = []
    const stack = []
    stack.push(root) 
    
    while (stack.length !== 0) {
        values = stack.pop()

        if (values.right !== null) {
            stack.push(values.right)
        }
        outputArray.push(values.val)
        if (values.left !== null) {
            stack.push(values.left)
        }
    }
    return outputArray;
};