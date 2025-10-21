class LinkedList {
    constructor() {
        this.head = null;
    }


    append(value) {
        const node = new ListNode(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.nextNode) current = current.nextNode;
        current.nextNode = node;
    }

    prepend(value) {
        const node = new ListNode(value);
        let currentHead = this.head;
        this.head = node;
        node.nextNode = currentHead;
    }

    size() {
        let current = this.head;
        let counter = 0;
        while (current) {
            counter++;
            current = current.nextNode;
        }
        return counter;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        let current = this.head;

        while (current.nextNode) {
            current = current.nextNode;
        }

        return current;
    }

    at(index) {
        if (index >= (this.size())) {
            return;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        }
        return current;
    }

    pop() {
        if (!this.head) return null;

        if (!this.head.nextNode) {
            const value = this.head.value;
            this.head = null;
            return value;
        }

        let current = this.head;
        while (current.nextNode.nextNode) {
            current = current.nextNode;
        }

        const value = current.nextNode.value;
        current.nextNode = null;
        return value;
    }

    contains(value) {
        let current = this.head;

        while (current) {
            if (value === current.value) return true;
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let counter = 0;

        while (current) {
            if (value === current.value) return counter;
            current = current.nextNode;
            counter++;
        }
        return null;
    }

    toString() {
        let current = this.head;
        let myString = "[Head] -> ";

        while (current) {
            myString += `[${current.value}] --> `
            current = current.nextNode;
        }
        myString += "[Tail]";

        return myString;
    }


    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }

        const prev = this.at(index - 1);
        if (!prev) return; // index out of range

        const newNode = new ListNode(value, prev.nextNode);
        prev.nextNode = newNode;
    }

    removeAt(index) {
        if (index >= this.size()) return;

        if (index === 0) {
            this.head = this.head.nextNode;
            return;
        }

        const prev = this.at(index - 1);
        if (!prev || !prev.nextNode) return;

        prev.nextNode = prev.nextNode.nextNode;


    }
}

class ListNode {
    constructor(value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

