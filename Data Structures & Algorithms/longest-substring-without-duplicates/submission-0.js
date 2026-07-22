class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;

        for (let i = 0; i < s.length; i++) {
            const tmp = new Set();
            let tmpLen = 0;

            for (let j = i; j < s.length; j++) {
                tmp.add(s[j]);
                tmpLen++;
                if (tmpLen !== tmp.size) {
                    break
                }
            }
            
            l = Math.max(tmp.size, l);
        }

        return l;
    }
}
