var generate = function(numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1,1]]
    let rows = [[1], [1,1]]
    for (let i = 2; i < numRows; i++) {
        const lastRow = rows[i - 1];
        let nextRow = [];
        for (let j = 0; j < lastRow.length + 1; j++) {
            if (j === 0 || j === lastRow.length) {
                nextRow.push(1)
            } else {
                newValue = lastRow[j] + lastRow[j - 1]
                nextRow.push(newValue); 
            }
        }
        rows.push(nextRow);
    }

    return rows;
};