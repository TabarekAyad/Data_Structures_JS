class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    // insert first node
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }
}

const ll = new LinkedList;

ll.insertFirst(10);
console.log(ll);