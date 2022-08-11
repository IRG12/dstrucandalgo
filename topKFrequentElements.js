{
  /*
Using a Bucket Sort... I think it's like a Heap
Time complexity: I'm not sure
Space complexity: I'm not sure

const topKFrequent = (nums, k) => {
    // Frequency Seen
    // key : freq
    // Start off count with 1 if not seen
    // If seen, increment that freq count
    const freqSeen = {};
    nums.forEach(num => {
        if(!freqSeen[num]) {
            freqSeen[num] = 1
        } else {
             freqSeen[num]++;
            
        }
    })
    
    // Bucket Sort
    // freq : key
    // Create array(a bucket) if doesn't exist
    // If exists, populate bucket
    const bucket = {};
    for (let key in freqSeen) {
        let freq = freqSeen[key];
        console.log(`This is freq ---> ${freq}`)
        if(!bucket[freq]) {
            bucket[freq] = [];
        }
        bucket[freq].push(key);
        console.log(`This is bucket ---> ${bucket[freq]}`)
        
    }
    
    // Access and Sort freq in bucket descending because we want the MOST frequency first
    // Set result to an empty array []. Output request
    // set frequency to a variable to help access value of that frequency in your bucket. Output request
    // Loop through values, populate results with k most frequent elements
    // return result
    
    const sortedFreqSeen = Object.keys(bucket).sort((a,b)=> b-a);
    console.log(`This is sortedFreqSeen ---> ${sortedFreqSeen}`)
    const res = [];
    for (let i=0, resK=0; i<sortedFreqSeen.length; i++) {
        let freq = sortedFreqSeen[i];
        console.log(`This is freq ---> ${freq}`)
        let key = bucket[freq];
        console.log(`This is key ---> ${key}`)
        for(let j=0; j<key.length && resK<k; j++) {
            // res.push(key[j]);
            console.log(`This is the key pushed to results ---> ${res.push(key[j])}`)
            resK++
        }
    }
    return res
     
};

*/
}
