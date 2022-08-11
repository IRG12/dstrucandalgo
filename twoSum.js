{
  /*

Using a HashMap/HashTable
Time complexity: O(N)
Space complexity: O(N)
(better solution)

const twoSum = (num,target) => {
    const map = {}
    for (let i = 0; i < num.length; i++) {
    const currentValue = num[i];
    const neededValue = target - currentValue
    const idx2 = map[neededValue]
    if (idx2 != null) {
    return [idx2,i]
    } else {
        map[currentValue] = i
        }
    }
}

-------       -------
Time complexity: O(N^2)
Space complexity: O(1) - constant

    const twoSum = (num,target) => {
    for(let i = 0; i < num.length; i++ )
        for(let j = i + 1; j < num.length; j++) {
            if(num[i] + num[j] === target) {
            return [i,j]
            }
        }
    }
*/
}
