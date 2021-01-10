// 1047. 删除字符串中的所有相邻重复项

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

// 空间换时间
// function removeDuplicates(S: string): string {
//     let arr = []
//     for(let i = 0 , len = S.length; i < len; i++) {
//         if(arr.length && arr[arr.length - 1] === S[i]) {
//             arr.pop()
//         } else {
//             arr.push(S[i])
//         }
//     }
//     return arr.join('')
// };