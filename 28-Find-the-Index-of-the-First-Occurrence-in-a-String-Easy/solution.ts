var strStr = function(haystack, needle) {
    if (haystack === needle) return 0;

    for(let i = 0; i < haystack.length - (needle.length - 1); i++) {
        const haytest = haystack.substring(i, i + needle.length)
        
        if (needle === haytest)
            return i;
    }
    return -1;
};