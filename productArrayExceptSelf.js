{
  /*


Time complexity: O(N)
Space complexity: O(N)

const productExceptSelf = (nums) => {
    const left = new Array(nums.length).fill(0);
    left[0] = 1;
    console.log(`left --->${left}`);

    const right = new Array(nums.length).fill(0);
    right[right.length - 1] = 1;
    console.log(`right --->${right}`)

    for (let i = 1; i < nums.length; i++) {
        left[i] = nums[i  - 1] * left[i - 1];
        console.log(`left(i) --->${left[i]}`)
    }
    console.log(`left --->${left}`)

    for (let i = right.length - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1];
        console.log(`${nums[i + 1]} * ${right[i + 1]}`)
        console.log(`right(i) --->${right[i]}`)
    }
    console.log(`right --->${right}`)

    for (let i = 0; i < nums.length; i++) {
        nums[i] = left[i] * right[i];
        console.log(`left(i) --->${left[i]}`)
        console.log(`right(i) --->${right[i]}`)
        console.log(`nums(i) --->${nums[i]}`)
    }

    
    return nums;
};

*/
}
