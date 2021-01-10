// 空间换时间
function removeDuplicates2(S: string): string {
    let arr = []
    for(let i = 0 , len = S.length; i < len; i++) {
        if(arr.length && arr[arr.length - 1] === S[i]) {
            arr.pop()
        } else {
            arr.push(S[i])
        }
    }
    return arr.join('')
};
