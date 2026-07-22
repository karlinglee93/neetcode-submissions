class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for (let i = 0; i < strs.length; i++) {
            const tmp = strs[i].split("").sort().join("");
            if (!res[tmp]) {
                res[tmp] = [];
            }
            res[tmp].push(strs[i]);
        }

        return Object.values(res);
    }
}
