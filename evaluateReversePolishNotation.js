{
  /*

const evalRPN = (tokens) => {
    const stack = [];
    
    const operators = {
        "+": (nums1, nums2) => nums1 + nums2,
        "-": (nums1, nums2) => nums1 - nums2,
        "*": (nums1, nums2) => nums1 * nums2,
        "/": (nums1, nums2) => Math.trunc(nums1 / nums2)
    };

    for(let token of tokens) {
        if(operators[token]) {
            let nums2 = stack.pop();
            let nums1 = stack.pop();
            
            stack.push(operators[token](nums1, nums2))
        } else {
            stack.push(parseInt(token))
        }
    }
    
    return stack.pop();
};

*/
}
