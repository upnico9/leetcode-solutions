var minDepth = function(root) {
    if (root == null) return 0;
    let node = root;
    let stack = [{node: root, level: 1}];
    let minimum;

    while (node !== null && stack.length !== 0) {
        let nodeValue = stack.pop();
        if (nodeValue.node.right !== null)
            stack.push({node: nodeValue.node.right, level: nodeValue.level + 1})
        if (nodeValue.node.left !== null)
            stack.push({node: nodeValue.node.left, level: nodeValue.level + 1})

        if (nodeValue.node.left === null && nodeValue.node.right === null) {
            if (!minimum || minimum >= nodeValue.level)
                minimum = nodeValue.level;
        }
    }
    return minimum;
};