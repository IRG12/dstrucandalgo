{
  /*

Time complexity: O(NK)
Space complexity: O(NK)
(1st place)

const groupAnagrams = (strs) => {
    let map = {};
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    for (let str of strs) {
        let key = str.split('').reduce((total, char) => total*primes[char.charCodeAt()-97],1);
        (!map[key]) ? map[key] = [str] : map[key].push(str);
        
    }
    return Object.values(map)
};

-------       -------


Time complexity: O(N*logN)
Space complexity: O(N)
(2nd place)

const groupAnagrams = (strs) => {
    const sortedValues = strs.map(word => word.split('').sort().join('').toLowerCase());
    let map = {};
    for(let i = 0; i < strs.length; i++) {
        if(!map[sortedValues[i]]) {
            map[sortedValues[i]] = [strs[i]];
        } else {
            map[sortedValues[i]].push(strs[i])
        }
    }
    return Object.values(map)
};



-------       -------

Time complexity: O(N*VlogV)
Space complexity: O(NK)
(3rd place)

const groupAnagrams = (strs) => {
    let map = {};
    for (let str of strs) {
        let sortedValue = str.split('').sort().join('').toLowerCase();
        (!map[sortedValue]) ? map[sortedValue] = [str] : map[sortedValue].push(str);
        
    }
    return Object.values(map)
};

*/
}
