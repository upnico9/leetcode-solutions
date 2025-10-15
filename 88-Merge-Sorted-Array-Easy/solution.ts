var merge = function(nums1, m, nums2, n) {
    let last = (n + m) - 1; 
    m--;
    n--;

    while(n >= 0) {
        if (m >= 0 && nums1[m] > nums2[n]) {
            nums1[last] = nums1[m];
            m--;
            last--;
        } else {
            nums1[last] = nums2[n];
            n--;
            last--;
        }
    }
    return nums1;
};