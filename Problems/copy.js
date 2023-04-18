class Node{
    constructor(value, next, prev){
        this.prev = prev;
        this.value = value;
        this.next = next;
    }
}

class LinkList{
    constructor(){
        this.head = null;
        this.tail =null;
    }
    addToHead(value){
        const node = new Node(value,null, this.head);
        if(this.head) this.head.next = node;
        else this.tail = node;
        this.head = node;
    }
    addToTail(value){
        const node = new Node(value, this.tail,)
    }
}