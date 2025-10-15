function isPalindrome(x: number): boolean {
    return x.toString(10).split("").reverse().join("") == x.toString(10)
};