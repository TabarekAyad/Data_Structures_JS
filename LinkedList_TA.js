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

    //insert last node
    insertLast(data){
        let node = new Node(data);
        let current;

        if(!this.head){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }

        this.size++;
    }
}

const ll = new LinkedList;

ll.insertFirst(10);

ll.insertLast (20);
ll.insertFirst(-10);
console.log(ll);