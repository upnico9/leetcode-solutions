function convertToTitle(columnNumber: number): string {
    let nb: number;
    let str: string = "";
    
    while (columnNumber > 0) { 
        nb = Math.floor((columnNumber - 1) % 26);
        str = String.fromCharCode(Math.floor(65 + nb)) + str;
        columnNumber = Math.floor((columnNumber - nb) / 26);
    
    }

    return str;
};