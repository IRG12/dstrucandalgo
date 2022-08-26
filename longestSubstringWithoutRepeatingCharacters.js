{
  /*

Time complexity : O(2n) = O(n). 
In the worst case each character will be visited twice by ii and jj.

Space complexity : O(min(n, m))O(min(n,m)). We need O(k)O(k) space 
for checking a substring has no duplicate characters,
where kk is the size of the Set. The size of the Set is upper bounded 
by the size of the string nn and the size of the charset/alphabet mm

const lengthOfLongestSubstring = (s) => {
    let set = new Set();
    let left = 0;
    let right = 0;
    let maxLength = 0;
    
    while (right < s.length) {
        if(!set.has(s.charAt(right))) {
            set.add(s.charAt(right));
            maxLength = Math.max(maxLength, set.size);
            right++
        } else {
            set.delete(s.charAt(left));
            left++;
        }
    }
    
    return maxLength
};

------------            ------------

const lengthOfLongestSubstring = (s) => {
    let set = new Set();
    let maxLength = 0;
    
    let left = 0;
    let right = 0;
    
    
    while (right < s.length) {
        let letter = s[right];
        
        if(!set.has(letter)) {
            set.add(letter);
            maxLength = Math.max(maxLength, set.size);
            right++
        } else {
            set.delete(s[left]);
            left++;
        }
    }
    
    return maxLength
};

*/
}
