{
  /*

Time complexity : O(n) because we simply traverse the
  given string one character at a time and push and
  pop operations on a stack take O(1) time.
Space complexity : O(n) as we push all opening brackets
 onto the stack and in the worst case, we will end up
 pushing all the brackets onto the stack. e.g. ((((((((((.

const isValid = (s) => {
    
    const map = {"(": ")", "{": "}", "[": "]"}
    const stack = [];
    for(let char of s) {
        if(map[char]) {
            // char is on opening bracket
            stack.push(map[char])
        } else if (stack.length > 0 && stack[stack.length - 1] === char) {
            // char is a closing bracket and top of stack matches 
            stack.pop();
        } else {
            // char is a closing bracket and top of the stack doesn't match
            return false
        }
    }
    return stack.length === 0 ? true : false
    
};

------------            ------------

const isValid = (s) => {
    
  const map = {"(": ")", "{": "}", "[": "]"}
    const stack = [];
    for(let char of s) {
        if(map[char]) {
            stack.push(map[char])
        } else  {
            if (stack.pop() !== char) return false
        }
    }
    return stack.length === 0 
};

------------            ------------

const isValid = (s) => {
    
 let stack = new Stack();
    
    for(let char of s) {
        if(char === '{' || char === '[' || char === '(' ) {
            stack.push(char);
        } else if(!stack.isEmpty() && char === '}' && stack.peek() === '{') {
            stack.pop();
        }  else if(!stack.isEmpty() && char === ')' && stack.peek() === '(') {
            stack.pop();
        }  else if(!stack.isEmpty() && char === ']' && stack.peek() === '[') {
            stack.pop();
        } else {
            return false
        }
    }
    
    return stack.isEmpty()
    
};

class Stack {
    constructor() {
        this.count = 0;
        this.storage = {}
    }
    
    push(val) {
        this.storage[this.count] = val;
        this.count++
    }
    
    getCount() {
        return this.count;
    }
    
    pop() {
        if(this.count === 0) {
            return undefined;
        }
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    
    peek() {
        let result = this.storage[this.count - 1];
        return result;
    }
    
    isEmpty() {
        return this.count === 0;
    }
}

*/
}
