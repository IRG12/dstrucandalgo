{
  /*

Complexity Analysis

Time complexity: O(n). The input array is traversed at most once. 
Thus the time complexity is O(n).

Space complexity: O(1). We only use additional space to store 
two indices and the sum, so the space complexity is O(1).

const twoSum = (numbers, target) => {
    let beginOfIndex = 0;
    let endOfIndex = numbers.length - 1;
    while( endOfIndex > beginOfIndex) {
        console.log(beginOfIndex + endOfIndex)
        let sum = numbers[beginOfIndex] + numbers[endOfIndex];
        
        console.log(`this is sum--> ${sum}`)
        if(sum < target) {
            beginOfIndex++
        } else if(sum > target) {
            endOfIndex--
        } else {
            return [beginOfIndex + 1, endOfIndex + 1]
        }
    }
};

----------            ------------

const twoSum = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;
    while(left < right) {
    sum = numbers[left] + numbers[right];
        if(sum === target) {
            return [left + 1, right + 1];
        }else if(sum < target) {
            left++;
        } else {
            right--;
        }
    }
};

------------             ------------

const twoSum = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;
    while(left < right) {
        if(numbers[left] + numbers[right] === target) {
            return [left + 1, right + 1];
        }else if(numbers[left] + numbers[right] < target) {
            left++;
        } else {
            right--;
        }
    }
};

------------            ------------

const twoSum = (numbers, target) => {
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;
    
    
    while(leftPointer < rightPointer) {
        let leftElement = numbers[leftPointer];
        let rightElement = numbers[rightPointer];
        
        if(leftElement + rightElement === target) {
            return [leftPointer + 1, rightPointer + 1];
            
        }else if(leftElement + rightElement > target) {
            rightPointer--;
        } else {
            leftPointer++;
        }
    }
};
*/
}
