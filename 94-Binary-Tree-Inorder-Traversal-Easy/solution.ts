var inorderTraversal = function(root) {
    let copyNode = root;
    let stack = [];
    let results = [];

    while(copyNode !== null || stack.length > 0) {
        while(copyNode !== null) {
            stack.push(copyNode);
            copyNode = copyNode.left;
        }

        copyNode = stack.pop();

        results.push(copyNode.val);

        copyNode = copyNode.right;
    }

    return results;
};