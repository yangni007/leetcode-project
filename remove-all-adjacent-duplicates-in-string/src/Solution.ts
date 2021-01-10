// 时间换空间
function removeDuplicates(S: string): string {
    while(true) {
        let count = 0
        for(let i = 0, len = S.length; i < len; i++) {
            if(S[i + 1] && S[i] === S[i + 1]) {
                S = S.replace(S[i].repeat(2), '')
                count++
            }
        }
        if(count === 0) break
    }
    return S
};
