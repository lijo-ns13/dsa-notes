class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class singleLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    // push elemennt
    push(value){
        const newNode=new Node(value)
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
    }
    // display in array
    display(){
        let arr=[];
        let current=this.head;
        while(current){
            arr.push(current.value);
            current=current.next;
        }
        console.log(arr)
    }
    // remove odd
    removeOdd(){
        while(this.head&&this.head.value%2!==0){
            this.head=this.head.next;
        }
        let cur=this.head;
        while(cur&&cur.next){
            if(cur.next.value%2!==0){
                cur.next=cur.next.next;
            }else{
                cur=cur.next;
            }
        }
    }
}