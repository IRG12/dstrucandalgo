{
  /*

!!!TIME LIMIT EXCEEDED!!!
Brute force way
Time Complexity: O(N^3)
Space Complexity: O(1)

const threeSum = (nums) => {
    nums.sort((a,b) => a - b);
    const tripletResult = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if(i > 0 && nums[i] == nums[i - 1]) continue
        for (let j = i + 1; j < nums.length - 1; j++) {
            if(j > i + 1 && nums[j] == nums[j - 1]) continue
            for (let k = j + 1; k < nums.length; k++) {
                if(k > j + 1 && nums[k] == nums[k - 1]) continue
                const a = nums[i];
                const b = nums[j];
                const c = nums[k];
                if (a + b + c === 0) {
                    
                    tripletResult.push([a,b, c])
                }
            }
        }
    }
   
    return tripletResult
};

------------            ------------

Optimal Solution
Linear
Time Complexity: O(N^2)
Space Complexity: O(1)


const threeSum = (nums) => {
    nums.sort((a,b) => a - b);
    const tripletResult = [];
    for (let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        const target = 0 - nums[i];
        let leftPointer = i + 1;
        let rightPointer = nums.length - 1;
        while(rightPointer > leftPointer) {
            const sumTwo = nums[leftPointer] + nums[rightPointer];
            if(sumTwo > target) {
                rightPointer--;
            } else if(sumTwo < target) {
                leftPointer++;
            } else {
                tripletResult.push([nums[i], nums[leftPointer], nums[rightPointer]]);
                while(nums[leftPointer] === nums[leftPointer + 1]) leftPointer++;
                while(nums[rightPointer] === nums[rightPointer - 1]) rightPointer--;
                leftPointer++;
                rightPointer--;
            }
        }
    }
    return tripletResult
};

------------            ------------

const threeSum = (nums) => {
    
    if(nums.length === 0) return [];
    
    nums = nums.sort((a,b) => a - b);
    const res = [];
    
    for (let i = 0; i < nums.length - 2; i++) {

        //stop duplicates
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        
        let leftPointer = i + 1;
        let rightPointer = nums.length - 1;
        
        while(leftPointer < rightPointer) {
            let threeSum = nums[i] + nums[leftPointer] + nums[rightPointer];
            if(threeSum === 0) {
                res.push([nums[i], nums[leftPointer], nums[rightPointer]]);
                //stop duplicates
                while(nums[leftPointer] === nums[leftPointer + 1]) leftPointer++;
                while(nums[rightPointer] === nums[rightPointer + 1]) rightPointer--;
                leftPointer++;
                rightPointer--;
            } else if(threeSum > 0) {
                rightPointer--;
            } else if(threeSum < 0) {
                leftPointer++;
            }
        }
    }
    return res
};

*/
}
