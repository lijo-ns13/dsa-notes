class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Stack{
    constructor(){
        this.top=null;
        this.length=0;
    }
    push(value){
        let newNode=new Node(value);
        if(!this.top){
            this.top=newNode;
        }else{
            newNode.next=this.top;
            this.top=newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.top)return undefined;
        let temp=this.top;
        this.top=this.top.next;
        temp.next=null;
        this.length--;
        return this;
    }
    display(){
        let arr=[];
        let current=this.top;
        while(current){
            arr.push(current.value);
            current=current.next;
        }
        console.log(arr)
    }
}
const stack=new Stack();
stack.push(23);
stack.push(525);
stack.push(232)
stack.push(98);
stack.pop()
stack.pop()
stack.display()