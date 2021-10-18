function removeDuplicates(nums: number[]): number {
    let fast = 1, slow = 1, len = nums.length
    if(len === 0) return 0
    while(fast < len) {
        if(nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
};