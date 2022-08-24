{
  /*

Time Complexity: O(N)
Space Complexity: O(1)

const maxArea = (height) => {
    let [left, right, maxWaterStored] = [0, height.length - 1, 0];
    
    while (left < right) {
        let width = (right - left);
        
        let maxArea = Math.min(height[left], height[right]) * width;
        
        maxWaterStored = Math.max(maxWaterStored, maxArea);
        
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWaterStored
};

*/
}
