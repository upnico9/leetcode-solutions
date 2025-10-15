var removeDuplicates = function (array) {
    if (array.length === 0) return 0;
    let insertPos = 1;

    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[i - 1]) {
            array[insertPos] = array[i];
            insertPos++;
        }
    }
    return insertPos;
};