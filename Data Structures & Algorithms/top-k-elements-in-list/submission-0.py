class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        res = defaultdict(int)
        for i in range(len(nums)):
            res[nums[i]] += 1
        
        sorted_items = sorted(res.items(), key = lambda item: item[1], reverse = True)

        return [item[0] for item in sorted_items[:k]]