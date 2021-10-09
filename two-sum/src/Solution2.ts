// hash法，存储target - x的值，时间复杂度O(n)
function twoSum(nums: number[], target: number): number[] {
    let hash = {}
    nums.forEach((v, idx) => {
        hash[v] = idx
    })
    for(let i=0; i < nums.length; i++) {
        const j = hash[target - nums[i]]
        if(j != null && j !== i) {
            return [i, j]
        }
    }
};