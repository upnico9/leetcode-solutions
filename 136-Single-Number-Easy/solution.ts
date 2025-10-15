var singleNumber = function(nums) {
    const sorted = nums.sort();

    counter = 0;
    while (counter < sorted.length) {
        if (sorted[counter] !== sorted[counter + 1])
            return sorted[counter]
        counter = counter + 2;
    }
};