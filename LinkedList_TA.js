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

    //print nodes data
    printListData(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next
        }
    }

    getNodeAt(index){
        //if index is out of range
        if(index < 0 || index > this.size){
            console.log(`The index ${index} is out of range`)
            return;
        }

        let current = this.head;
        let count = 0;

        while(current){
            if(count === index){
                console.log(current);
            }
            count++;
            current = current.next;
        }
        return null;
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

        if(!this.head){ //if(this.head = null)
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

    //insert at index
    insertAt(data, index){
        //if index is out of range
        if(index < 0 || index > this.size){
            console.log(`The index ${index} is out of range`)
            return;
        }

        //if index = 0, the node should be inserted before the head
        if(index === 0){
            this.head = new Node(data, this.head);
            this.size++;
            return;
        }

        const node = new Node(data);
        let previous;
        let count = 0;
        let current = this.head;

        while(count < index){
            previous = current;
            current = current.next;
            count++;
        }

        node.next = current;
        previous.next = node;

        this.size++;

    }

}

const ll = new LinkedList;

ll.insertFirst(10);
ll.insertLast (20);
ll.insertFirst(-10);
ll.insertAt(-20,-1);
ll.insertAt(30,9);
ll.insertAt(0,1);
ll.insertAt(5,2);
ll.printListData();
ll.getNodeAt(-3);
ll.getNodeAt(3);
ll.getNodeAt(20);
console.log(ll);