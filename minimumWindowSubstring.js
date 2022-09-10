{
  /*

Time: Time Limit Exceeded
but i understand the code

const minWindow = (s, t) => {

    let map = new Map();
    
    for(let char of t){
        if(!map.has(char)) {
            map.set(char, 1);
        }else {
            map.set(char, map.get(char) + 1);
        }
    }
    
    let l = 0;
    let r = 0;
    let length = Infinity;
    let count = map.size;
    let minWindow = "";
    
    while(r < s.length) {
        
        let rChar = s[r];
        if(map.has(rChar)) {
            map.set(rChar, map.get(rChar) - 1);
            if(map.get(rChar) === 0) count--;
        }
        
        r--
        
        while(count === 0) {
            if(r - l < length) {
                length = r - l;
                minWindow = s.slice(l, r);
            }
            
            let lChar = s[l];
            if(map.has(lChar)) {
                map.set(lChar, map.get(lChar) + 1);
                if(map.get(lChar) > 0) count++
            }
            
            l++
        }
    }
    
    return minWindow
    
};

------------            ------------

Time Complexity: O(|S| + |T|) where |S| and |T| represent the lengths of strings S and T. 
In the worst case we might end up visiting every element of string S twice, 
once by left pointer and once by right pointer. 
|T| represents the length of string T.

Space Complexity: O(|S| + |T|). |S| when the window size is equal 
to the entire string S. |T| when T has all unique characters.


const minWindow = (s, t) => {

    let min = "";
    let left = 0;
    let right = -1;
    
    let map = {};
    t.split('').forEach(element => {
        if(map[element] == null) {
            map[element] = 1;
        } else {
            map[element] = map[element] + 1;
        }
    });
    
    let count = Object.keys(map).length;
    
    while (right <= s.length) {
        if(count == 0) {
          let current = s[left];
            
            if(map[current] != null) {
                map[current]++
            }
            
            if (map[current] > 0) {
                count++
            }
            
            let temp = s.substring(left, right + 1);
            if(min == "") {
                min = temp;
            } else {
                min = min.length < temp.length ? min : temp;
            }
            
            left++
            
            
        } else {
              right++;
            let current = s[right];
            if(map[current] != null) {
                map[current]--
            }
            if (map[current] == 0) {
                count--;
            }
        }
    }
    return min
};


*/
}
