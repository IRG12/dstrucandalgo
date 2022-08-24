{
  /*

Time complexity:  O(n)
Space complexity:  O(1)

const isPalindrome = (s) => {
    const reg = /[\W_]/g;
    
    const polishedStr = s.toLowerCase().replace(reg, "");
    
    let leftIndex = 0;
    let rightIndex = polishedStr.length - 1;
    
    while (leftIndex < rightIndex) {
        if(polishedStr[leftIndex] !== polishedStr[rightIndex]) return false
        leftIndex++;
        rightIndex--;
    }
    return true
};

------------            ------------

Time complexity: I think this is O(nlogn) 
Space complexity: I think this is O(nlogn) 

const isPalindrome = (s) => {
    const reg = /[\W_]/g;
    
    const polishedStr = s.toLowerCase().replace(reg, "");
    console.log(polishedStr)
    
    const reversed = polishedStr.split("").reverse().join("");
    console.log(reversed)
    return (reversed === polishedStr) ? true : false; 
};

*/
}
