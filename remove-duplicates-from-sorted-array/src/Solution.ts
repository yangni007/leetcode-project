// 暴力破解法
function removeDuplicates(nums: number[]): number {
    let i = 0
    while(i < nums.length - 1) {
        if(nums[i] === nums[i+1]) {
            nums.splice(i+1, 1)
        } else {
            i++
        }
    }
    return nums.length
};
