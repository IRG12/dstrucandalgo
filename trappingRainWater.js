{
  /*

Time complexity: O(n).
We store the maximum heights upto a point using 2 iterations of O(n) each.
We finally update \text{ans}ans using the stored values in O(n).

Space complexity: O(n) extra space.
Additional O(n) space for \text{left\_max}left_max and
 \text{right\_max}right_max arrays than in Approach 1.

 const trap = (height) => {
 
    // init variables 
    let totalWater = 0
    let wallHeight = 0
    let maxHeight = height[0]
    let heightIndex = 0
    
    //find the index of the highest height in height array
    for(let i = 0; i < height.length; i++) {
        if(height[i] > maxHeight) {
            maxHeight = height[i]
            heightIndex = i
        }
    }
    
    //traverse heights upto highest index
    // if cuurent height is taller than wallHeight, wallHeight = current height
    //at each index, find the difference between current height and wallHeight
    for(let i = 0; i <= heightIndex; i++) {
        if(height[i] > wallHeight) {
            wallHeight = height[i]
        } else {
            totalWater += wallHeight - height[i]
        }
    }
    
    // reset wallHeight
    // repeat above iteration in opposite direction up till you reach the highest index
    wallHeight = 0
    
    
     for(let i = height.length - 1; i > heightIndex; i--) {
        if(height[i] > wallHeight) {
            wallHeight = height[i]
        } else {
            totalWater += wallHeight - height[i]
        }
    }
    return totalWater
};

------------            ------------

const trap = (height) => {
    if(height === null) {
        return 0;
    }
    
    let trappedWater = 0;
    let lMax = [];
    let rMax = [];
    lMax[0] = height[0];
    
    for(let i = 1; i < height.length; i++) {
        lMax[i] = Math.max(height[i], lMax[i - 1]);
    }
    
    rMax[height.length - 1] = height[height.length - 1];
    
    for(let i = height.length - 2; i >= 0; i--) {
        rMax[i] = Math.max(height[i], rMax[i + 1]);
    }
    
    for(let i = 1; i < height.length - 1; i++) {
        trappedWater += Math.min(lMax[i], rMax[i]) - height[i];
    }
    return trappedWater
};

*/
}
