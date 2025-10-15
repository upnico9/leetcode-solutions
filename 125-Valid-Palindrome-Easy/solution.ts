var isPalindrome = function(s) {
    const filteredStr = s.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();

    return filteredStr == filteredStr.split('').reverse().join('');
};