{
  /*

Time complexity: Researching answer
Space complexity: Researching answer

const characterReplacement = (s, k) => {
    
    const map = {};
    let max = 0;
    let maxCount = 0;
    for(let start = 0, end = 0; end < s.length; end++) {
        map[s[end]] = (map[s[end]] || 0) + 1;
        max = Math.max(max, map[s[end]]);
        if(end - start + 1 - max > k) map[s[start++]]--;
        maxCount = Math.max(maxCount, end -start + 1);
    }
    return maxCount
    
};

------------            ------------

Time complexity: O(26 * N) ---> O(N)
Space complexity: Researching answer

var characterReplacement = function(s, k) {
    let [ left, right, longest, max ] = new Array(4).fill(0);
    const frequencyMap = new Array(26).fill(0);

    while (right < s.length) {
        const count = addRightFrequency(s, right, frequencyMap);
        
        longest = Math.max(longest, count);

        let window = (right - left) + 1;
        const canSlide = k < (window - longest);
        if (canSlide) {
            subtractLeftFrequency(s, left, frequencyMap);
            left++;
        }

        window = (right - left) + 1;
        max = Math.max(max, window);
        
        right++;
    }
    
    return max;
};

const addRightFrequency = (s, right, map) => {
    const char = s[right];
    const index = getCode(char);

    map[index]++;
    
    return map[index];
}

const subtractLeftFrequency = (s, left, map) => {
    const char = s[left];
    const index = getCode(char);

    map[index]--;
    
    return map[index];
}

const getCode = (char) => char.charCodeAt(0) - 'A'.charCodeAt(0);

*/
}
