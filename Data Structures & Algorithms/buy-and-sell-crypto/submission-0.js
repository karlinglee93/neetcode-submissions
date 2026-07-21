class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let p = 0;
        for (let i = 0; i < prices.length - 1; i++) {
            for (let j = i+1; j < prices.length; j++) {
                p = Math.max(prices[j] - prices[i], p);
            }
        }

        if (p < 0) p = 0;
        return p;
    }
}
