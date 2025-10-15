var mySqrt = function(x) {
    let left = 0;
    let right = x;

    while (left <= right) {
        const mid = Math.floor((right + left) / 2);
        const midSquare = mid * mid;
        if (midSquare > x) {
            right = mid - 1;
        } else if (midSquare < x) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return right;
};