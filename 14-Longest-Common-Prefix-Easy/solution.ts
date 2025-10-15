function longestCommonPrefix(strs: string[]): string {
    let str = '';
    for (let i = 0; i < strs[0].length; i++) {
        let strEvol = "";
        for (let j = 0; j < strs.length; j++) {
            strEvol = strEvol + strs[j][i];
        }
        
        if (!strEvol.split('').every(c => c === strEvol[0]))
            break;
        str = str + strEvol[0];
    }

    return str;
};