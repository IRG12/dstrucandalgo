{
  /*

var MinStack = function() {
    this.stack = new Stack();
    this.minStack = new Stack();
};


 MinStack.prototype.push = function(val) {
    this.stack.push(val);
    
    if(this.minStack.size === 0) {
        this.minStack.push(val);
    } else if (val <= this.minStack.peek()) {
        this.minStack.push(val);
    }
};


MinStack.prototype.pop = function() {
    let removeElement = this.stack.pop();
    
    if(removeElement === this.minStack.peek()) {
        this.minStack.pop();
    }
};


MinStack.prototype.top = function() {
    return this.stack.peek();
};


MinStack.prototype.getMin = function() {
    return this.minStack.peek();
};

 


class Stack {
    constructor() {
        this.storage = {};
        this.size = 0;
    }
    
    push(val) {
        this.storage[this.size] = val;
        this.size++;
    }
    
    pop() {
        let top = this.storage[this.size - 1];
        this.size--;
        delete this.storage[this.size];
        return top;
    }
    
    peek() {
        return this.storage[this.size - 1];
    }
    
    empty() {
        return this.storage[this.size - 1];
    }
    
    getSize() {
        return this.size;
    }
}

------------            ------------

var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};


MinStack.prototype.push = function(val) {
   if(this.stack.length === 0) {
       this.minStack.push(val);
   } else {
       let min = Math.min(val, this.minStack[this.minStack.length - 1]);
       console.log(min)
       this.minStack.push(min);
   }
    
    this.stack.push(val);
};

MinStack.prototype.pop = function() {
   
    this.stack.pop();
    this.minStack.pop();
};


MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};


MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

------------            ------------

var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.push = function(val) {
    
   if(!this.stack.length) {
       this.stack.push(val);
       this.minStack.push(val);
   } else {
       this.stack.push(val);
       this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]));  
   }
};

MinStack.prototype.pop = function() {
   if(!this.stack.length) return null;
    this.minStack.pop();
    return this.stack.pop();
};


MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};


MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

*/
}
