{
  /*

Time complexity: O(n) 
Space complexity: O(n) 

const longestConsecutive = (nums) => {
     let set = new Set(nums);
    let longestMax = 0;
    
    for(let num of set) {
        if(set.has(num - 1)) continue;
        let currMax = 1;
        
        while(set.has(num + 1)) {
            currMax++;
            num++;
        }
        longestMax = Math.max(longestMax, currMax);
    }
    return longestMax
};

*/
}
