{
  /*var isAnagram = function(s, t) {

    const normalStr = (str) => {
        return str
        .toLowerCase()
        .split('')
        .sort()
        .join('')
    }

    return normalStr(s) === normalStr(t)

--- Using a HashMap below ---

if(s.length !== t.length) return false
const Map = {}
const n = s.length
for (let i=0; i<n; i++) {
    if(!Map[s[i]]) Map[s[i]] = 0
    if(!Map[t[i]]) Map[t[i]] = 0
    Map[s[i]]++
    Map[t[i]]--
}
for(let ch in Map) {
    if(Map[ch] !== 0) return false
}
return true
};
*/
}
