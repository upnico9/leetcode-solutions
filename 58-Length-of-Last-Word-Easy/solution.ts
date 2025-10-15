var lengthOfLastWord = function(s) {
    const arr = s.trim().split(' ').reverse();
    return arr[0].length;
};