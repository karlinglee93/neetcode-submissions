class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        s = set();
        l = len(nums)
        for num in nums:
            s.add(num)

        return l != len(s)