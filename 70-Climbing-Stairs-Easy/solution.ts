var climbStairs = function(n) { 
    if (n <= 3) return n;

    let firstPrevious = 3;
    let secondPrevious = 2;
    let current = 0;

    for (let i = 3; i < n; i ++) {
        current = firstPrevious + secondPrevious;
        secondPrevious = firstPrevious;
        firstPrevious = current;
    }  

    return current;
};