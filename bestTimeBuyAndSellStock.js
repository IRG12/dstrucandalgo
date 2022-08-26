{
  /*

Time complexity: O(n). Only a single pass is needed.

Space complexity: O(1). Only two variables are used.

const maxProfit = (prices) => {
    
    let curMin = prices[0];
    let maxProfit = 0;
    
    for(let i = 0; i < prices.length; i++) {
        
        if(prices[i] < curMin) {
            curMin = prices[i];
        } else if(prices[i] - curMin > maxProfit) {
            maxProfit = prices[i] - curMin;
        }
    }
    
    return maxProfit;
};

------------            ------------

const maxProfit = (prices) => {
    
    let curMin = prices[0];
    let curMax = 0;
    
    for(let i = 0; i < prices.length; i++) {
        
        curMin = Math.min(prices[i], curMin);
        curMax = Math.max(curMax,prices[i] - curMin);
    }
    
    return curMax;
};

*/
}
