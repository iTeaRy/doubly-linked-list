const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (this._head === null) {
            this._head = newNode;
            this._tail = newNode;
        } else {
            newNode.prev = this._tail;
            this._tail.next = newNode;
            this._tail = newNode;
        }
        this.length++;
        return this;
    }

    head() {
        var currentNode = this._head.data;
        return currentNode;
    }

    tail() {
        var currentNode = this._tail.data;
        return currentNode;
    }

    at(index) {
        if (index > -1) {
            let current = this._head;
            let i = 0;
            while ((current !== null) && (i < index)) {
                current = current.next;
                i++;          
            }
            return current !== null ? current.data : undefined;
        } else {
            return undefined;
        }

    }

    insertAt(index, data) {
        let current = this._head;
        let i = 1;
        let newNode = new Node(data);
        if (this.length === 0) {
            this.append(data);
        } else {
            if( index == 0 ) {
                this._head.prev = newNode
                newNode.next = this._head
                this._head = newNode
            }   
            else {
                while(current) {
                    current = current.next;
                    if( i == index ) {
                        newNode.prev = current.prev
                        current.prev.next = newNode
                        newNode.next = current
                        current.prev = newNode
                    }
                i++
                }
            }
            this.length++;
        }
    }

    isEmpty() {
        return this.length ===0;
    }

    clear() {
        if (this.length !== 0) {
            this.length = 0;
            this._head.data = null;
            this._tail.data = null;
        }
        return this;
    }

    deleteAt(index) {
        let current = this._head;
        let i = 1;
        if( index == 0 ) {
            this._head = this._head.next;
            if (this.length > 1) {
                this._head.prev = null;
            }
        } else {
            while( current ) {
                current = current.next
                if ( current == this._tail ) {
                    this._tail = this._tail.prev;
                    this._tail.next = null;
                } else if( i == index ) {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    break;
                }
                i++;
            }
        }
        this.length--;
        return this;
    }

    reverse() {
        let current = this._head;
        let prev = null;
        while( current ) {
            let next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }
        this._tail = this._head;
        this._head = prev;
        return this;
    }

    indexOf(data) {
        let current = this._head;
        let i = 0;
        while( current ) {
            if( current.data == data ) {
                return i;
            }
            current = current.next;
            i++;
        }
        return -1;
    }
}

module.exports = LinkedList;
