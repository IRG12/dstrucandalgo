// var containsDuplicate = function(nums) {

//Using: Set() --it's like a HashTable/HashMap--

//     const hashSet = new Set();

//     for (let num of nums) {
//         if (hashSet.has(num)) {
//             return true
//         } else {
//             hashSet.add(num)
//         }
//     }
//     return false

//Using: brute force

//     const container = {}

//    for (let i=0; i<nums.length; i++) {
//        //checking if number is a duplicate and
//        //returning true if it is
//        if (container[nums[i]]) {
//            return true
//        }
//        // storing if it's not a duplicate
//        container[nums[i]] = true
//    }
//     //returning false if it's not a duplicate
//     return false
// };
