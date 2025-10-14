// First dumb approach, no optimization 
function isIsomorphic(s: string, t: string): boolean {
    const charMappingS = new Map<string, number[]>();
    const charMappingT = new Map<string, number[]>();

    for (let i = 0; i < s.length; i++) {
        const keyS = s[i], keyT = t[i];

        const arrS = charMappingS.get(keyS);
        const arrT = charMappingT.get(keyT);
        
        if (arrS) arrS.push(i)
        else charMappingS.set(keyS, [i])

        if (arrT) arrT.push(i)
        else charMappingT.set(keyT, [i])

    }

    const iterS = charMappingS.entries();
    const iterT = charMappingT.entries();

    while (true) {
        const nextS = iterS.next();
        const nextT = iterT.next();

        if (nextS.done || nextT.done) break;

        const [keyS, valuesS] = nextS.value;
        const [keyT, valuesT] = nextT.value;

        if (valuesS.length !== valuesT.length ||
        !valuesS.every((v, i) => v === valuesT[i])) {
        return false;
        }
    }

    return true;
};


// Second better approach, way better
function isIsomorphic2(s: string, t: string): boolean {
    const charMappingS = new Map<string, number[]>();
    const charMappingT = new Map<string, number[]>();

    for (let i = 0; i < s.length; i++) {

        if (charMappingS[s[i]] === undefined) 
            charMappingS[s[i]] = i;
        if (charMappingT[t[i]] === undefined)
            charMappingT[t[i]] = i;
        
        if (charMappingS[s[i]] !== charMappingT[t[i]])
            return false;        
    }

    return true;
};