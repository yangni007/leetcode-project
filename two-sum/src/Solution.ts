// 暴力破解法,时间复杂度O(n2)
function twoSum(nums: number[], target: number): number[] {
    for(let i=0; i < nums.length; i++) {
        for(let j=i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};
