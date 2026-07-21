class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        p = 0
        for i in range(len(prices)):
            for j in range(i+1, len(prices)):
                p = max(prices[j] - prices[i], p)

        return p
        