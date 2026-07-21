class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const s = new Set();
        const len = nums.length;

        for (let i = 0; i < len; i++) {
            s.add(nums[i]);
        }

        return len !== s.size;
    }
}
