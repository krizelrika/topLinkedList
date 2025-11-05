// Node class representing each element in the list
class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

// LinkedList class managing the list
class LinkedList {
    constructor() {
        this.headNode = null;
    }

    // Adds a new node containing value to the end of the list
    append(value) {
        const newNode = new Node(value);
        if (this.headNode === null) {
            this.headNode = newNode;
            return;
        }

        let current = this.headNode;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    // Adds a new node containing value to the start of the list
    prepend(value) {
        const newNode = new Node(value, this.headNode);
        this.headNode = newNode;
    }

    // Returns the total number of nodes in the list
    size() {
        let count = 0;
        let current = this.headNode;
        while (current) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    // Returns the first node in the list
    head() {
        return this.headNode;
    }

    // Returns the last node in the list
    tail() {
        if (!this.headNode) return null;
        let current = this.headNode;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        return current;
    }

    // Returns the node at the given index
    at(index) {
        if (index < 0) return null;
        let current = this.headNode;
        let count = 0;
        while (current !== null) {
            if (count === index) return current;
            count++;
            current = current.nextNode;
        }
        return null; // index out of range
    }

    // Removes the last element from the list
    pop() {
        if (!this.headNode) return null;
        if (!this.headNode.nextNode) {
            this.headNode = null;
            return;
        }
        let current = this.headNode;
        while (current.nextNode.nextNode !== null) {
            current = current.nextNode;
        }
        current.nextNode = null;
    }

    // Returns true if the passed in value is in the list
    contains(value) {
        let current = this.headNode;
        while (current !== null) {
            if (current.value === value) return true;
            current = current.nextNode;
        }
        return false;
    }

    // Returns the index of the node containing value, or null if not found
    find(value) {
        let index = 0;
        let current = this.headNode;
        while (current !== null) {
            if (current.value === value) return index;
            index++;
            current = current.nextNode;
        }
        return null;
    }

    // Represents your LinkedList objects as strings
    toString() {
        let result = "";
        let current = this.headNode;
        while (current !== null) {
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        return result + "null";
    }

    // EXTRA CREDIT: Inserts a new node at the given index
    insertAt(value, index) {
        if (index < 0) return;
        if (index === 0) {
            this.prepend(value);
            return;
        }

        const prevNode = this.at(index - 1);
        if (prevNode === null) return; // index out of range

        const newNode = new Node(value, prevNode.nextNode);
        prevNode.nextNode = newNode;
    }

    // EXTRA CREDIT: Removes the node at the given index
    removeAt(index) {
        if (index < 0 || this.headNode === null) return;

        if (index === 0) {
            this.headNode = this.headNode.nextNode;
            return;
        }

        const prevNode = this.at(index - 1);
        if (prevNode === null || prevNode.nextNode === null) return;
        prevNode.nextNode = prevNode.nextNode.nextNode;
    }
}

// Export the class for main.js
export { LinkedList, Node };
