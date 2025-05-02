class Stack{
    constructor(){
        this.items=[];
    }
    push(value){
        this.items.push(value);
    }
    pop(){
        if(this.isEmpty())return 'stack is empty'
        return this.items.pop();
    }
    isEmpty(){
        return this.items.length==0
    }
    peek(){
        if(this.isEmpty())return 'stack is empty';
        return this.items[this.items.length-1]
    }
    
}

const stack=new Stack();
stack.push(3);
stack.push(5);
stack.push(6);
stack.push(78);
stack.pop();
console.log(stack)